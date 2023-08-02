import * as Yup from 'yup';
import { MAX_LENGTH_12, MIN_LENGTH } from '../constants/variables';

export const signupSchema = Yup.object().shape({
	email: Yup.string()
		.email('Please enter a valid email')
		.required('Email is required'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password is too short - must be at least 8 characters long')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			'Must contain one uppercase, one lowercase, one number and one special character'
		),
	confirmPassword: Yup.string()
		.required('Please confirm your password')
		.oneOf([Yup.ref('password')], 'Passwords do not match'),
});

export const accountSchema = Yup.object().shape({
	name: Yup.string()
		.required('Name is required')
		.min(
			MIN_LENGTH,
			`Name is too short - must be at least ${MIN_LENGTH} characters long`
		)
		.max(
			MAX_LENGTH_12,
			`Name is too long - must not be longer than ${MAX_LENGTH_12} characters long`
		),
});
export const budgetSchema = Yup.object().shape({
	name: Yup.string()
		.required('Name is required')
		.min(
			MIN_LENGTH,
			`Name is too short - must be at least ${MIN_LENGTH} characters long`
		)
		.max(
			MAX_LENGTH_12,
			`Name is too long - must not be longer than ${MAX_LENGTH_12} characters long`
		),
});
