import { createStore, combineReducers } from 'redux';

/*
import recordsReducer from './reducers/records';
import schoolsReducer from './reducers/schools';
import studentsReducer from './reducers/students';
import tutorsReducer from './reducers/tutors';
*/
import usersReducer from './reducers/users';

const rootReducer = combineReducers({
/*	records: recordsReducer,
	schools: schoolsReducer,
	students: studentsReducer,
	tutors: tutorsReducer, */
	users: usersReducer
});

const configureStore = () => {
	return createStore(rootReducer);
};

export default configureStore;