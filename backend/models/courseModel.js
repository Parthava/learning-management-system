import mongoose from 'mongoose'

const courseSchema = mongoose.Schema({
	course_name: {
		type: String,
		required: true
	},
	course_outline: {
		type: String,
		required: true,
	},
	total_units: {
		type: Number,
		required: true,
		default: 1
	},
	total_students: {
		type: Number,
		required: true,
		default: 0
	},
	created_by: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Teacher'
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

const Course = mongoose.model('Course', courseSchema)
export default Course;