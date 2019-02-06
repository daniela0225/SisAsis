import {
	SIGN_IN,
	SIGN_OUT,
	SET_HEADERS
} from '../actions/userActions/actionTypes';

const initialState = {
	token: null,
	headers: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type){
		case SIGN_IN:
			return {
				...state,
				token: action.token
			};
		case SIGN_OUT:
			return {
				token: null,
				headers: {}
			};
		case SET_HEADERS:
			return {
				...state,
				headers: action.headers
			}
		default:
			return state;
	}
};

export default reducer;