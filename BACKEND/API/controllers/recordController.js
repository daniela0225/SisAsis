const mongoose = require('mongoose');
const Record = require('../models/record');

const Student = require('../models/student');
const SchoolConf = require('../models/schoolConfiguration');

const DateFunctions = require('../SpecialFunctions/DateFunctions');

module.exports = {
	show: (req,res,next)=>{
		Record.find()
			.select('_id student date school type')
			.populate('student','DNI name last_name')
			.populate('school','name')
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					records: docs.map(doc => {
						return {
							_id: doc._id,
							student: doc.student,
							date: doc.date,
							school: doc.school,
							type: doc.type
						}
					})
				};
				res.status(200).json(response);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	create: (req,res,next)=>{
		/* Aun no es funcional */
		/*
		console.log(req.body);
		const fingerprint = req.body[0]["ID"];
		const date = req.body[0]["date"];
		console.log("ID: " + fingerprint);
		console.log("date: " + date);
		res.status(200).json({ message: 'Created succesfully' });
		*/

		const record = new Record({
			_id: new mongoose.Types.ObjectId(),
			student: req.body.student,
			date: req.body.date,
			school: req.body.school,
			type: req.body.type
		});
		record
			.save()
			.then(result=>{
				res.status(200).json({
					message: 'Created succesfully',
					createdRecord: {
						_id: result._id,
						student: result.student,
						date: result.date,
						school: result.school,
						type: result.type
					}
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	find: (req,res,next)=>{
		const id = req.query.recordId;
		Record.findById(id)
			.select('_id student date school type')
			.populate('student','DNI')
			.populate('school','name')
			.exec()
			.then(doc=> {
				if (doc) {
					res.status(200).json({
						record: doc
					});
				}else{
					res.status(404).json({message: 'No valid entry found for provided ID'});
				}
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	update: (req,res,next)=>{
		const id = req.body.recordId;
		const updateOps = req.body;
		delete updateOps._id
		Record.update({_id:id},{$set: updateOps})
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'Updated'
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	delete: (req,res,next)=>{
		const id = req.body.recordId;
		Record.remove({_id: id})
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'Deleted'
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	recordsBySchool: (req,res,next)=>{
		Record.find({school:req.query.schoolId})
			.select('_id student date type')
			.populate('student','DNI name last_name')
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					records: docs.map(doc => {
						return {
							_id: doc._id,
							student: doc.student,
							date: doc.date,
							type: doc.type
						}
					})
				};
				res.status(200).json(response);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	recordsByStudent: (req,res,next)=>{
		Record.find({school:req.query.studentId})
			.select('_id date type')
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					records: docs.map(doc => {
						return {
							_id: doc._id,
							date: doc.date,
							type: doc.type
						}
					})
				};
				res.status(200).json(response);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	recordById: (req,res,next)=>{
		Record.find({school:req.query.recordId})
			.select('_id student date school type')
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					records: docs.map(doc => {
						return {
							_id: doc._id,
							student: doc.student,
							date: doc.date,
							school: doc.school,
							type: doc.type
						}
					})
				};
				res.status(200).json(response);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},

	recordsByDay: (req,res,next)=>{
		Record.find({date:
				{
					$gte: new Date(req.body.year,req.body.month,req.body.day)
				}
			})
			.select('_id date type')
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					records: docs.map(doc => {
						return {
							_id: doc._id,
							date: doc.date,
							type: doc.type
						}
					})
				};
				res.status(200).json(response);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	recordsByDayAndYear: (req,res,next) => {
		//desde el controlador alumnos,ordenar alumnos por año y populate con records.
	},
	countAttendancesByStudent: (req, res, next) => {
		Record.count({student: req.query.studentId, type: 'CHECK_IN'})
			.exec()
			.then((attendaces) => {
				Student.findById(req.query.studentId)
					.select('school')
					.exec()
					.then((student) => {
						const school = student.school;
						SchoolConf.findOne({school: school})
							.exec()
							.then((config) => {
								const startDate = new Date(config.startDate.toISOString());
								let endDate = new Date(config.endDate.toISOString());
								//endDate = new Date();
								//endDate = ( today > endDate)? endDate : today;

								const daysBetween = DateFunctions.daysBetween(startDate, endDate);
								const weekendDays = DateFunctions.weekendDaysBetween(startDate, endDate);
								const holidays = DateFunctions.holidaysBetween(startDate, endDate);
								const vacationDays = DateFunctions.vacationDaysBetween(startDate, endDate, config.vacations);

								const expectedAttendances = daysBetween - (weekendDays + holidays + vacationDays);
								const absences = expectedAttendances - attendaces;

								//Total expected attendances
								const totalEndDate =  new Date(config.endDate.toISOString());

								const totalDaysBetween = DateFunctions.daysBetween(startDate, totalEndDate);
								const totalWeekendDays = DateFunctions.weekendDaysBetween(startDate, totalEndDate);
								const totalHolidays = DateFunctions.holidaysBetween(startDate, totalEndDate);
								const totalVacationDays = DateFunctions.vacationDaysBetween(startDate, totalEndDate, config.vacations);

								const totalExpectedAttendances = totalDaysBetween - (totalWeekendDays + totalHolidays + totalVacationDays);

								result = {
									totalExpectedAttendances: totalExpectedAttendances, 
									expectedAttendances: expectedAttendances,
									attendaces: attendaces,
									absences: absences,
									startDate: startDate,
									endDate: endDate,
									daysBetween: daysBetween,
									weekendDays: weekendDays,
									holidays: holidays
								};

								res.status(200).json(result);
							});
					})
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	}
}