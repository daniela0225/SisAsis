const mongoose = require('mongoose');
const Record = require('../models/record');

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
	recordsByDayAndYear: (req,res,next)=>{
		//desde el controlador alumnos,ordenar alumnos por año y populate con records.
	}
}