import {
	SET_ACTUAL_VIEW
} from '../actions/viewActions/actionTypes';

const initialState = {
	actualView: 'Login'
};

const reducer = (state = initialState, action) => {
	switch (action.type){
		case SET_ACTUAL_VIEW: 
			return {
				actualView: action.actualView
			};
		default:
			return state;
	}
};

export default reducer;