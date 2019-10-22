import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import App from 'views/App';
import 'assets/styles/_variables.scss';
toast.configure();

ReactDOM.render(<App />, document.getElementById('root'));
