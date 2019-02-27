import { SET_TEACHERS, SET_PROFILE_SELECTED_TEACHER, SET_MENU_SELECTED_TEACHER } from './actionTypes';

export const setTeachers = ( list ) => {
	return {
		type: SET_TEACHERS,
		list: list
	}
}

export const setProfileSelectedTeacher = ( id ) => {
	return {
		type: SET_PROFILE_SELECTED_TEACHER,
		selectedTeacher: id
	}
}

export const setMenuSelectedTeacher = ( id ) => {
	return {
		type: SET_MENU_SELECTED_TEACHER,
		selectedTeacher: id
	}
}