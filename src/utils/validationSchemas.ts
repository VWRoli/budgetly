import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
	email: Yup.string().email('Please enter a valid email').required('Email is required'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password is too short - must be at least 8 characters long')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			'Must contain one uppercase, one lowercase, one number and one special character'
		),
	confirmPassword: Yup.string()
		.required('Please confirm your password')
		.oneOf([Yup.ref('password')], 'Passwords do not match')
});

export const loginSchema = Yup.object().shape({
	email: Yup.string().email('Please enter a valid email').required('Email is required'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password is too short - must be at least 8 characters long')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			'Must contain one uppercase, one lowercase, one number and one special character'
		)
});
