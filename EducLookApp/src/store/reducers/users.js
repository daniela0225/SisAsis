import {
	SIGN_IN
} from '../userActions/actionTypes';

const initialState = {
	email: '',
	password: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type){
		case SIGN_IN:
			return {
				...state,
				places: state.places.concat({
					key: Math.random(),
					name: action.placeName,
					image: {
						uri: "https://www.coleurope.eu/sites/default/files/uploads/page/coe_brugespage_img5.jpg"
					}
				})
			};
		default:
			return state;
	}
};

export default reducer;