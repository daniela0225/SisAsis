import { SET_ACTUAL_VIEW } from './actionTypes';

export const setActualView = ( view ) => {
	return {
		type: SET_ACTUAL_VIEW,
		actualView: view
	};
};
