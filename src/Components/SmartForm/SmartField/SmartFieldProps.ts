import { StrictFormFieldProps } from 'semantic-ui-react';

export interface SmartFieldProps {
    name: string;
    control: StrictFormFieldProps['control'];
    label?: string;
    placeholder?: string;
    type?: StrictFormFieldProps['type'];
}
