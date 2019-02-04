const mongoose = require('mongoose');
var genders = 'MALE FEMALE'.split(' ');
var sections = 'A B C D E F G H UNIQUE'.split(' ');

const studentSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {type: String, required: true},
	last_name: {type: String, required: true},
	gender: {type: String, enum: genders, required: true},
	DNI: {type: String, required: true},
	birthdate: {type:Date, required: true},
	year: {type:Number, required: true},
	section: {type:String, enum: sections, required: true},
	fingerprint: {type:Number, required: true},
	code: {type:Number, required: true},
	order_number: {type:Number, required: true},
	school: {type: mongoose.Schema.Types.ObjectId, ref:'School', required: true},
	tutor: {type: mongoose.Schema.Types.ObjectId, ref:'Tutor', required: true},
	teacher: {type: mongoose.Schema.Types.ObjectId, ref:'Teacher', required: true}
});
module.exports = mongoose.model('Student', studentSchema,'students');