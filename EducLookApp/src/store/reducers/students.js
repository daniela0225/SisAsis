import {
	SET_STUDENTS
} from '../actions/studentActions/actionTypes';

const initialState = {
	list: []
};

const reducer = (state = initialState, action) => {
	switch (action.type){
		case SET_STUDENTS:
			return {
				list: action.list
			}
		default:
			return state;
	}
};

export default reducer;