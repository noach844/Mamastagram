import { useField } from 'formik';
import React, { FC } from 'react';
import { FormField } from 'semantic-ui-react';
import { SmartFieldProps } from './SmartFieldProps';

export const SmartField: FC<SmartFieldProps> = ({
    name,
    label,
    placeholder,
    control,
    type,
}) => {
    const [field, meta] = useField(name);
    return (
        <FormField
            {...field}
            type={type}
            control={control}
            label={label}
            name={name}
            placeholder={placeholder}
            error={meta.touched && meta.error}
        />
    );
};
