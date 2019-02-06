import { SET_STUDENTS } from './actionTypes';

export const setStudents = ( list ) => {
	return {
		type: SET_STUDENTS,
		list: list
	}
}