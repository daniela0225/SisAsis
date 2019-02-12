import { SET_SCHOOL_DATA, SET_SCHOOL_CONFIG } from './actionTypes';

export const setSchoolData = ( school ) => {
	return {
		type: SET_SCHOOL_DATA,
		_id: school._id,
		name: school.name,
		logo: school.logo,
	};
};

export const setSchoolConfig = ( config ) => {
	return {
		type: SET_SCHOOL_CONFIG,
		startDate: config.startDate,
		endDate: config.endDate,
		kinderSchedule: config.kinderSchedule,
		primarySchedule: config.primarySchedule,
		secondarySchedule: config.secondarySchedule,
		vacations: config.vacations
	}
};