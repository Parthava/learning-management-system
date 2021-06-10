import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
	stud_name: {
		type: String,
		required: true
	},
	stud_email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	stud_mobile: {
		type: Number,
		required: true
	},
	stud_address: {
		type: String,
		required: true
	},
	stud_pic: {
		type: String,
		required: false
	},
	course: {
		type: Array,
		required: true
	},
	exam: {
		type: Array,
		required: true
	},
	active: {
		type: Boolean,
		required: true,
		default: 1
	},
	cKey: {
		type: Boolean,
		required: true,
		default: 1
	}
}, {
	timestamps: true
})

const Student = mongoose.model('Student', studentSchema)
export default Student;