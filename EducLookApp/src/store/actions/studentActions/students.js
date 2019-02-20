import { SET_STUDENTS, SET_PROFILE_SELECTED_STUDENT, SET_MENU_SELECTED_STUDENT } from './actionTypes';

export const setStudents = ( list ) => {
	return {
		type: SET_STUDENTS,
		list: list
	}
}

export const setProfileSelectedStudent = ( id ) => {
	return {
		type: SET_PROFILE_SELECTED_STUDENT,
		selectedStudent: id
	}
}

export const setMenuSelectedStudent = ( doc ) => {
	return {
		type: SET_MENU_SELECTED_STUDENT,
		selectedStudent: doc
	}
}