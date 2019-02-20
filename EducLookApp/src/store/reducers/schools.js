import {
	SET_SCHOOL_DATA,
	SET_SCHOOL_CONFIG
} from '../actions/schoolActions/actionTypes';

const initialState = {
	_id: '',
	name: '',
	logo: '',
	configuration: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type){
		case SET_SCHOOL_DATA:
			return {
				...state,
				_id: action._id,
				name: action.name,
				logo: action.logo.replace("\\", "/")
			};
		case SET_SCHOOL_CONFIG:
			return {
				...state,
				configuration: action.config
			}
		default:
			return state;
	}
};

export default reducer;