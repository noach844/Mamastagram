import React, { FC } from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'semantic-ui-react';
import { SmartFormProps } from './SmartFormProps';

export const SmartForm: FC<SmartFormProps> = ({    
    initialValues,
    buttonProps,
    children,
    schema,
    onSubmit
}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={schema}
        >
            {({ handleSubmit }) => {
                return (
                    <Form onSubmit={handleSubmit}>
                        {children}
                        <Form.Field
                            control={Button}
                            type="submit"
                            {...buttonProps}
                        />
                    </Form>
                );
            }}
        </Formik>
    );
};
