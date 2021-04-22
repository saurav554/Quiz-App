import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Design.css';
import './style12.css';
import './mobile.css';
import './browsers.css';
// import './Table.css'
// import './Qs.css';
// import './Components/CSS/QBank.css';
import App from './App';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
