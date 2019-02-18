import {
	SET_STUDENTS,
	SET_PROFILE_SELECTED_STUDENT,
	SET_MENU_SELECTED_STUDENT
} from '../actions/studentActions/actionTypes';

const initialState = {
	list: [],
	profileSelectedStudent: '',
	menuSelectedStudent: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type){
		case SET_STUDENTS:
			return {
				list: action.list
			}
		case SET_PROFILE_SELECTED_STUDENT:
			return {
				...state,
				profileSelectedStudent: action.selectedStudent
			}
		case SET_MENU_SELECTED_STUDENT:
			return {
				...state,
				menuSelectedStudent: action.selectedStudent
			}
		default:
			return state;
	}
};

export default reducer;