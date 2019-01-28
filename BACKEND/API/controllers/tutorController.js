const mongoose = require('mongoose');
const Tutor = require('../models/tutor');

module.exports = {
	show: (req,res,next)=>{
		Tutor.find()
			.select('_id DNI name last_name address cellphone telephone email')
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					tutors: docs.map(doc => {
						return {
							_id: doc._id,
							DNI: doc.DNI,
							name: doc.name,
							last_name: doc.last_name,
							address: doc.address,
							cellphone: doc.cellphone,
							telephone: doc.telephone,
							email: doc.email
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
		
		const tutor = new Tutor({
			_id: new mongoose.Types.ObjectId(),
			DNI: req.body.DNI,
			name: req.body.name,
			last_name: req.body.last_name,
			address: req.body.address,
			cellphone: req.body.cellphone,
			telephone: req.body.telephone,
			email: req.body.email
		});
		tutor
			.save()
			.then(result=>{
				res.status(200).json({
					message: 'Created succesfully',
					createdTutor: {
						_id: result._id,
						DNI: result.DNI,
						name: result.name,
						last_name: result.last_name,
						address: result.address,
						cellphone: result.cellphone,
						telephone: result.telephone,
						email: result.email
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
		const id = req.query.tutorId;
		Tutor.findById(id)
			.select('_id DNI name last_name address cellphone telephone email')
			.exec()
			.then(doc=> {
				if (doc) {
					res.status(200).json({
						tutor: doc
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
		const id = req.body.tutorId;
		const updateOps = req.body;
		delete updateOps._id
		Tutor.update({_id:id},{$set: updateOps})
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
		const id = req.body.tutorId;
		Tutor.remove({_id: id})
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
	searchByDNI: (req,res,next)=>{
		const string = req.body.string + '';
		console.log(string);
		Tutor.find({DNI: { $regex: string , $options:'i'}})
			.select('_id DNI name last_name address cellphone telephone email')
			.exec()
			.then( (doc) => {
				if (doc) {
					res.status(200).json({
						tutor: doc
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
	}
}