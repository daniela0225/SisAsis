const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	DNI: {type: String, required: true},
	name: {type: String, required: true},
	last_name: {type: String, required: true},
	address: {type: String, required: true},
	cellphone: {type: String, required: false},
	telephone: {type: String, required: true},
	email: {type: String, required: true},
});
module.exports = mongoose.model('Student', studentSchema,'students');