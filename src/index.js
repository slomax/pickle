/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./favicon.ico');
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import * as firebase from 'firebase';

injectTapEventPlugin();

var config = {
  apiKey: "AIzaSyB7czRH5gtGUmzSwRePIf6dX-bsEqCBzf8",
  authDomain: "pickle-61d3b.firebaseapp.com",
  databaseURL: "https://pickle-61d3b.firebaseio.com",
  projectId: "pickle-61d3b",
  storageBucket: "pickle-61d3b.appspot.com",
  messagingSenderId: "693168419989"
};

firebase.initializeApp(config);

render(
    <Router routes={routes} history={browserHistory} />, document.getElementById('app')
);
