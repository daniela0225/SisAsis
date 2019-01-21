import { SIGN_IN } from './actionTypes';

export const signIn = ( email, password ) => {
	return {
		type: SIGN_IN,
		email: email,
		password: password
	};
};