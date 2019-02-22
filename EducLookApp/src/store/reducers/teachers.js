import {
	SET_TEACHERS,
	SET_PROFILE_SELECTED_TEACHER,
	SET_MENU_SELECTED_TEACHER
} from '../actions/teacherActions/actionTypes';

const initialState = {
	list: [],
	profileSelectedTeacher: '',
	menuSelectedTeacher: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type){
		case SET_TEACHERS:
			return {
				list: action.list
			}
		case SET_PROFILE_SELECTED_TEACHER:
			return {
				...state,
				profileSelectedTeacher: action.selectedTeacher
			}
		case SET_MENU_SELECTED_TEACHER:
			return {
				...state,
				menuSelectedTeacher: action.selectedTeacher
			}
		default:
			return state;
	}
};

export default reducer;