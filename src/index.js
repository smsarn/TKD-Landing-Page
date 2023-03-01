import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
//import { Router } from 'react-router';
import App from './App';
import unregisterServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
//  <BrowserRouter basename={baseUrl}>
//    <App />
//	</BrowserRouter>,

	<MemoryRouter basename={baseUrl}>
		<App />
	</MemoryRouter>,
  rootElement);

//unregisterServiceWorker();
