import { 
	TEACHER_LOGIN_REQUEST,
	TEACHER_LOGIN_SUCCESS,
	TEACHER_LOGIN_FAIL,
	TEACHER_LOGOUT,
	TEACHER_REGISTER_REQUEST,
	TEACHER_REGISTER_SUCCESS,
	TEACHER_REGISTER_FAIL } from '../constants/teacherConstants'

export const teacherLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case TEACHER_LOGIN_REQUEST:
			return { loading: true }

		case TEACHER_LOGIN_SUCCESS:
			return { loading: false, teacherInfo: action.payload }

		case TEACHER_LOGIN_FAIL:
			return { loading: false, error: action.payload }

		case TEACHER_LOGOUT:
			return {}

		default:
			return state
	}
}

export const teacherRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case TEACHER_REGISTER_REQUEST:
			return { loading: true }

		case TEACHER_REGISTER_SUCCESS:
			return { loading: false, teacherInfo: action.payload }

		case TEACHER_REGISTER_FAIL:
			return { loading: false, error: action.payload }

		default:
			return state
	}
}