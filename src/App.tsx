import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
function App() {
    return (
        <div>
            <Layout />
            <ToastContainer />
        </div>
    );
}

export default App;
