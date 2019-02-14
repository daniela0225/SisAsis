import { SET_SCHOOL_DATA } from './actionTypes';

export const setSchoolData = ( school ) => {
	return {
		type: SET_SCHOOL_DATA,
		_id: school._id,
		name: school.name,
		logo: school.logo,
	};
};