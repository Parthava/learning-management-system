import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
	exam: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Exam'
	},
	question_text: {
		type: String,
		required: true,
		unique: true
	},
	mark: {
		type: Number,
		required: true
	},
	option1: {
		type: String,
		required: true
	},
	option2: {
		type: String,
		required: true
	},
	option3: {
		type: String,
		required: true
	},
	option4: {
		type: String,
		required: true
	},
	answer: {
		type: String,
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

const Question = mongoose.model('Question', questionSchema)
export default Question;