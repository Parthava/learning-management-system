import mongoose from 'mongoose'

const teacherSchema = mongoose.Schema({
	tchr_name: {
		type: String,
		required: true
	},
	tchr_email: {
		type: String,
		required: true,
		unique: true
	},
	hashPassword: {
		type: String,
		required: true
	},
	user_type: {
		type: String,
		required: true
	},
	tchr_mobile: {
		type: Number,
		required: true
	},
	tchr_address: {
		type: String,
		required: true
	},
	tchr_pic: {
		type: String,
		required: false
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

const Teacher = mongoose.model('Teacher', teacherSchema)
export default Teacher;