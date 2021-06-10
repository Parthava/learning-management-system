import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import { teacherLoginReducer, teacherRegisterReducer } from './reducers/teacherReducers'
import { courseListReducer, courseCreateReducer, 
	specificCourseListReducer, courseUpdateReducer,
  courseDeleteReducer } from './reducers/courseReducers';

const reducer = combineReducers({
    teacherLogin: teacherLoginReducer,
    teacherRegister: teacherRegisterReducer,
    courseList: courseListReducer,
    courseCreate: courseCreateReducer,
    specificCourseList: specificCourseListReducer,
    courseUpdate: courseUpdateReducer,
    courseDelete: courseDeleteReducer
});

const teacherInfoFromStorage = localStorage.getItem('teacherInfo')
  ? JSON.parse(localStorage.getItem('teacherInfo'))
  : null

const initialState = {
	teacherLogin: { teacherInfo: teacherInfoFromStorage },
}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
 
export default store; 