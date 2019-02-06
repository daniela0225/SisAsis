import { createStore, combineReducers } from 'redux';

/*
import recordsReducer from './reducers/records';
import schoolsReducer from './reducers/schools';
import tutorsReducer from './reducers/tutors';
*/
import usersReducer from './reducers/users';
import studentsReducer from './reducers/students';
import viewsReducer from './reducers/views';

const rootReducer = combineReducers({
/*	records: recordsReducer,
	schools: schoolsReducer,
	tutors: tutorsReducer, */
	users: usersReducer,
	students: studentsReducer,
	views: viewsReducer
});

const configureStore = () => {
	return createStore(rootReducer);
};

export default configureStore;