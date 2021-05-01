import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Pricing from './Pages/Pricing.js'; 
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/directory" component={App} />
      <Route path="/pricing" component={Pricing} />
      <Redirect from="/" to="/directory" />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
