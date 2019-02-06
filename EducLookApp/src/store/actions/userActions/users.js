import { SIGN_IN, SIGN_OUT, SET_HEADERS } from './actionTypes';

export const signIn = ( token ) => {
	return {
		type: SIGN_IN,
		token: token
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
		token: null,
		headers: null
	};
};

export const setHeaders = ( headers ) => {
	return {
		type: SET_HEADERS,
		headers: headers
	}
}