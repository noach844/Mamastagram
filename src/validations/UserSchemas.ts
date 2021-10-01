import * as yup from 'yup';
import { FormikValues } from 'formik';

export const LoginSchema = yup.object().shape({
    userName: yup.string().required('Username is required!'),
    password: yup.string().required('Password is required!'),
});

export const SignupSchema = yup.object().shape({
    email: yup
        .string()
        .email('Email must be a valid email!')
        .required('Email is required!'),
    userName: yup
        .string()
        .min(4, 'Username lenght must be at least 4 character!')
        .required('Username is required!'),
    password: yup
        .string()
        .min(4, 'Password lenght must be between 4 - 16!')
        .max(16, 'Password lenght must be between 4 - 16!')
        .required('Password is required!'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords should match!'),
});

export const LoginInitialValues: FormikValues = {
    userName: '',
    password: '',
};

export const SignupInitialValues: FormikValues = {
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
};
