import mongoose from 'mongoose'

const resultSchema = mongoose.Schema({
	student: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Student'
	},
	exam: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Exam'
	},
	marks_obtained: {
		type: Number,
		required: true,
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

const Result = mongoose.model('Result', resultSchema)
export default Result;