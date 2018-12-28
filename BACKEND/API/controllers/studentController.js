const mongoose = require('mongoose');
const Student = require('../models/student');

module.exports = {
	show: (req,res,next)=>{
		Student.find()
			.select('_id name last_name gender DNI birthdate year section fingerprint code order_number school tutor')
			.populate('school','name')
			.populate('tutor','DNI')
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					students: docs.map(doc => {
						return {
							_id: doc._id,
							name: doc.name,
							last_name: doc.last_name,
							gender: doc.gender,
							DNI: doc.DNI,
							birthdate: doc.birthdate,
							year: doc.year,
							section: doc.section,
							fingerprint: doc.fingerprint,
							code: doc.code,
							order_number: doc.order_number,
							school: doc.school,
							tutor: doc.tutor
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
		
		const student = new Student({
			_id: new mongoose.Types.ObjectId(),
			name: req.body.name,
			last_name: req.body.last_name,
			gender: req.body.gender,
			DNI: req.body.DNI,
			birthdate: req.body.birthdate,
			year: req.body.year,
			section: req.body.section,
			fingerprint: req.body.fingerprint,
			code: req.body.code,
			order_number: req.body.order_number,
			school: req.body.school,
			tutor: req.body.tutor
		});
		student
			.save()
			.then(result=>{
				res.status(200).json({
					message: 'Created succesfully',
					createdStudent: {
						_id: result._id,
						name: result.name,
						last_name: result.last_name,
						gender: result.gender,
						DNI: result.DNI,
						birthdate: result.birthdate,
						year: result.year,
						section: result.section,
						fingerprint: result.fingerprint,
						code: result.code,
						order_number: result.order_number,
						school: result.school,
						tutor: result.tutor
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
		const id = req.query.studentId;
		Student.findById(id)
			.select('_id name last_name gender DNI birthdate year section fingerprint code order_number school tutor')
			.populate('school','name')
			.populate('tutor','DNI')
			.exec()
			.then(doc=> {
				if (doc) {
					res.status(200).json({
						student: doc
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
		const id = req.body.studentId;
		const updateOps = req.body;
		delete updateOps._id
		Student.update({_id:id},{$set: updateOps})
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
		const id = req.body.studentId;
		Student.remove({_id: id})
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
	}
}