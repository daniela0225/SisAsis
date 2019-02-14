import {
	SET_SCHOOL_DATA
} from '../actions/schoolActions/actionTypes';

const initialState = {
	_id: '',
	name: '',
	logo: ''
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
		default:
			return state;
	}
};

export default reducer;