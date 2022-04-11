import React from 'react';
import "./App.css";
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import auth from './services/authService';
import Pages from './components/movies';



function App() {
    //   const [user, setUser] = React.useState(null);

    //   React.useEffect(() => {
    //     setUser(auth.getCurrentUser());
    //   }, []);

    return (
        <React.Fragment>
            <main className="container">
                <Pages />
            </main>
        </React.Fragment>
    );
}

export default App;
