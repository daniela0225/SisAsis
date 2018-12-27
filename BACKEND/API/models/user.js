const mongoose = require('mongoose');
var types = 'ALL_ACCESS SCHOOL_ADMIN SCHOOL_TEACHER TUTOR'.split(' ');

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	email: {type: String, required: true}
	password: {type: String, required: true}
	type: {type: String, enum: types, required: true}
	school: {type: mongoose.Schema.Types.ObjectId, ref:'School', required: true}
});
module.exports = mongoose.model('User', userSchema,'usuarios');

