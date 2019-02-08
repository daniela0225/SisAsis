import { SET_SCHOOL_DATA } from './actionTypes';

export const setSchoolData = ( school ) => {
	return {
		type: SET_SCHOOL_DATA,
		name: school.name,
		logo: school.logo
	};
};