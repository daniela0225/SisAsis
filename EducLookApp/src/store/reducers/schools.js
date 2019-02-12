import {
	SET_SCHOOL_DATA,
	SET_SCHOOL_CONFIGURATION
} from '../actions/schoolActions/actionTypes';

const initialState = {
	_id: null,
	name: '',
	logo: '',
	startDate: null,
	endDate: null,
	kinderSchedule: {},
	primarySchedule: {},
	secondarySchedule: {}
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
		case SET_SCHOOL_CONFIGURATION:
			return {
				...state,
				startDate: action.startDate,
				endDate: action.endDate,
				kinderSchedule: action.kinderSchedule,
				primarySchedule: action.primarySchedule,
				secondarySchedule: action.secondarySchedule
			}
		default:
			return state;
	}
};

export default reducer;