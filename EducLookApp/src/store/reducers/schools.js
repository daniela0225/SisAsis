import {
	SET_SCHOOL_DATA
} from '../actions/schoolActions/actionTypes';

const initialState = {
	name: '',
	logo: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type){
		case SET_SCHOOL_DATA: 
			return {
				name: action.name,
				logo: action.logo
			};
		default:
			return state;
	}
};

export default reducer;