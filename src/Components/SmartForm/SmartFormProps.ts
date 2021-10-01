import { ReactElement } from 'react';
import { ButtonProps } from 'semantic-ui-react';
import { SmartFieldProps } from './SmartField/SmartFieldProps';
import * as yup from 'yup';
import { ObjectShape } from 'yup/lib/object';
import { FormikConfig, FormikValues } from 'formik';

export interface SmartFormProps extends FormikConfig<FormikValues>{
    initialValues: FormikValues;
    buttonProps?: ButtonProps;
    schema?: yup.ObjectSchema<ObjectShape>;
    children?: ReactElement<SmartFieldProps> | ReactElement<SmartFieldProps>[];
}
