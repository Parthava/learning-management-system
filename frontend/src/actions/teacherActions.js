import { 
	TEACHER_LOGIN_REQUEST,
	TEACHER_LOGIN_SUCCESS,
	TEACHER_LOGIN_FAIL,
	TEACHER_LOGOUT,
	TEACHER_REGISTER_REQUEST,
	TEACHER_REGISTER_SUCCESS,
	TEACHER_REGISTER_FAIL } from '../constants/teacherConstants'

import axios from 'axios'

export const login = (tchr_email, password) => async (dispatch) => {
	try {
		dispatch({
			type: TEACHER_LOGIN_REQUEST
		})

		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		}

		const { data } = await axios.post('/api/teacher/login', 
			{ tchr_email, password, config })

		dispatch({
			type: TEACHER_LOGIN_SUCCESS,
			payload: data
		})

		localStorage.setItem('teacherInfo', JSON.stringify(data))

	}

	catch (error) {
		dispatch ({
			type: TEACHER_LOGIN_FAIL,
			payload: error.response && error.response.data.message ? 
			error.response.data.message :
			error.message,
		})
	}
}

export const logout = () => (dispatch) => {
	localStorage.removeItem('teacherInfo')
	dispatch({
		type: TEACHER_LOGOUT
	})
}

export const register = (tchr_name, tchr_email, password, tchr_mobile, tchr_address, tchr_pic) => async (dispatch) => {
	try {
		dispatch({
			type: TEACHER_REGISTER_REQUEST
		})

		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		}

		const { data } = await axios.post('/api/teacher/register', 
			{ tchr_name, tchr_email, password, tchr_mobile, tchr_address, tchr_pic }, config)

		dispatch({
			type: TEACHER_REGISTER_SUCCESS,
			payload: data
		})

		dispatch({
			type: TEACHER_LOGIN_SUCCESS,
			payload: data
		})

		localStorage.setItem('teacherInfo', JSON.stringify(data))

	}

	catch (error) {
		dispatch ({
			type: TEACHER_REGISTER_FAIL,
			payload: error.response && error.response.data.message ? 
			error.response.data.message :
			error.message,
		})
	}
}