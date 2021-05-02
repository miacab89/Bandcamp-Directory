import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import Pricing from './Pages/Pricing.js'; 
import Login from './Pages/Login.js'; 
import SignUp from './Pages/SignUp.js'; 
import Deactivate from './Pages/Deactivate.js'; 
import { AuthProvider } from "./Contexts/AuthContext.js"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route path="/directory" component={App} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/deactivate" component={Deactivate} />
        <Redirect from="/" to="/directory" />
      </Switch>
      </AuthProvider>
  </BrowserRouter>
);

ReactDOM.render(
  routes, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
