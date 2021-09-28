import * as yup from 'yup';
import { FormikValues } from 'formik';

export const LoginSchema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),
});

export const SignupSchema = yup.object().shape({
    email: yup.string().email().required(),
    userName: yup.string().required(),
    password: yup.string().min(4).max(16).required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords should match'),
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
