import './App.css';
import { SmartForm, SmartField } from './Components/SmartForm';
import 'semantic-ui-css/semantic.min.css';
import { Input } from 'semantic-ui-react';
import { LoginSchema, LoginInitialValues } from './validations/UserSchemas';

function App() {
    return (
        <div className="App">
            <SmartForm
                initialValues={LoginInitialValues}
                buttonProps={{ primary: true, content: 'Submit' }}
                schema={LoginSchema}
            >
                <SmartField
                    control={Input}
                    name="userName"
                    label="Username:"
                    placeholder="Enter username..."
                />
                <SmartField
                    control={Input}
                    name="password"
                    label="Password:"
                    placeholder="Enter password..."
                    type="password"
                />
            </SmartForm>
        </div>
    );
}

export default App;
