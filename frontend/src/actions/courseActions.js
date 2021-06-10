import { 
  COURSE_LIST_REQUEST, 
  COURSE_LIST_SUCCESS, 
  COURSE_LIST_FAIL,
  SPECIFIC_COURSE_LIST_REQUEST,
  SPECIFIC_COURSE_LIST_SUCCESS,
  SPECIFIC_COURSE_LIST_FAIL,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_CREATE_FAIL,
  COURSE_UPDATE_REQUEST,
  COURSE_UPDATE_SUCCESS,
  COURSE_UPDATE_FAIL,
  COURSE_DELETE_REQUEST,
  COURSE_DELETE_SUCCESS,
  COURSE_DELETE_FAIL} from '../constants/courseConstants'


import axios from 'axios'

export const listCourses = () => async(dispatch) => {
	try {
		dispatch({ type: COURSE_LIST_REQUEST})

		const { data } = await axios.get('/api/course/all')

		dispatch({
			type: COURSE_LIST_SUCCESS,
			payload: data,
		})
	}
	catch (error) {
		dispatch ({
			type: COURSE_LIST_FAIL,
			payload: error.responce && error.responce.data.message ? 
			error.responce.data.message :
			error.message,
		})
	}
}

export const getSpecificCourses = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SPECIFIC_COURSE_LIST_REQUEST,
    })

    const {
      teacherLogin: { teacherInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${teacherInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/course/specific`, config)

    dispatch({
      type: SPECIFIC_COURSE_LIST_SUCCESS,
      payload: data,
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: SPECIFIC_COURSE_LIST_FAIL,
      payload: message,
    })
  }
}

export const createCourse = (course_name, course_outline, total_units) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURSE_CREATE_REQUEST,
    })

    const {
      teacherLogin: { teacherInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${teacherInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/course/create`, { course_name, course_outline, total_units}, config)

    dispatch({
      type: COURSE_CREATE_SUCCESS,
      payload: data,
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: COURSE_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateCourse = (course_name, course_outline, total_units, id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURSE_UPDATE_REQUEST,
    })

    const {
      teacherLogin: { teacherInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${teacherInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/course/update/${id}`, { course_name, course_outline, total_units}, config)

    dispatch({
      type: COURSE_UPDATE_SUCCESS,
      payload: data,
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: COURSE_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const deleteCourse = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURSE_DELETE_REQUEST,
    })

    const {
      teacherLogin: { teacherInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${teacherInfo.token}`,
      },
    }

    const { data } = await axios.delete(`/api/course/delete/${id}`, config)

    dispatch({
      type: COURSE_DELETE_SUCCESS,
      payload: data,
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: COURSE_DELETE_FAIL,
      payload: message,
    })
  }
}