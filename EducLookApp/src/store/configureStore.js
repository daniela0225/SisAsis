import { createStore, combineReducers } from 'redux';

/*
import recordsReducer from './reducers/records';
import tutorsReducer from './reducers/tutors';
*/
import usersReducer from './reducers/users';
import studentsReducer from './reducers/students';
import schoolsReducer from './reducers/schools';
import viewsReducer from './reducers/views';
import teachersReducer from './reducers/teachers';

const rootReducer = combineReducers({
/*	
	records: recordsReducer,
	tutors: tutorsReducer, 
*/
	users: usersReducer,
	students: studentsReducer,
	schools: schoolsReducer,
	views: viewsReducer,
	teachers: teachersReducer
});

const configureStore = () => {
	return createStore(rootReducer);
};

export default configureStore;