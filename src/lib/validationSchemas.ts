import * as Yup from 'yup';
import { MAX_LENGTH, MIN_LENGTH } from './constants/variables';

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
		.trim()
		.transform((value) => (value === '' ? undefined : value))
		.required('Name is required')
		.min(
			MIN_LENGTH,
			`Name is too short - must be at least ${MIN_LENGTH} characters long`
		)
		.max(
			MAX_LENGTH,
			`Name is too long - must not be longer than ${MAX_LENGTH} characters long`
		),
});
export const categorySchema = Yup.object().shape({
	title: Yup.string()
		.trim()
		.transform((value) => (value === '' ? undefined : value))
		.required('Title is required')
		.min(
			MIN_LENGTH,
			`Title is too short - must be at least ${MIN_LENGTH} characters long`
		)
		.max(
			MAX_LENGTH,
			`Title is too long - must not be longer than ${MAX_LENGTH} characters long`
		),
});
export const budgetSchema = Yup.object().shape({
	currency: Yup.string().required('Currency is required'),
	name: Yup.string()
		.trim()
		.transform((value) => (value === '' ? undefined : value))
		.required('Name is required')
		.min(
			MIN_LENGTH,
			`Name is too short - must be at least ${MIN_LENGTH} characters long`
		)
		.max(
			MAX_LENGTH,
			`Name is too long - must not be longer than ${MAX_LENGTH} characters long`
		),
});
export const transactionSchema = Yup.object().shape({
	accountId: Yup.string().required('Account is required'),
	payee: Yup.string()
		.trim()
		.transform((value) => (value === '' ? undefined : value))
		.required('Payee is required')
		.min(
			MIN_LENGTH,
			`Payee is too short - must be at least ${MIN_LENGTH} characters long`
		)
		.max(
			MAX_LENGTH,
			`Payee is too long - must not be longer than ${MAX_LENGTH} characters long`
		),
	inflow: Yup.string(),
	outflow: Yup.string(),
	category: Yup.string(),
	subCategory: Yup.string(),
	date: Yup.string().required('Date is required'),
});

export const updateBudgetedSchema = Yup.object().shape({
	amount: Yup.string().required('Amount is required'),
});
export const changeDefaultBudgetSchema = Yup.object().shape({
	id: Yup.number().required('Budget ID is required'),
});
