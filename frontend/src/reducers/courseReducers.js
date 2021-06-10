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

export const courseListReducer = (state = { courses: [] }, action) => {
	switch (action.type) {
		case COURSE_LIST_REQUEST:
			return { loading: true, courses: [] }

		case COURSE_LIST_SUCCESS:
			return { loading: false, courses: action.payload }

		case COURSE_LIST_FAIL:
			return { loading: false, error: action.payload }

		default:
			return state
	}
}

export const specificCourseListReducer = (state = { spcfcourses: [] }, action) => {
  switch (action.type) {
    case SPECIFIC_COURSE_LIST_REQUEST:
      return { loading: true, spcfcourses: [] }

    case SPECIFIC_COURSE_LIST_SUCCESS:
      return { loading: false, spcfcourses: action.payload }

    case SPECIFIC_COURSE_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const courseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_CREATE_REQUEST:
      return {
        loading: true,
      }
    case COURSE_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        course: action.payload,
      }
    case COURSE_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const courseUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_UPDATE_REQUEST:
      return {
        loading: true,
      }
    case COURSE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        updatedCourse: action.payload,
      }
    case COURSE_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const courseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_DELETE_REQUEST:
      return {
        loading: true,
      }
    case COURSE_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        courseDeleted: action.payload,
      }
    case COURSE_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}