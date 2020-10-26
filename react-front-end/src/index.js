import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App.jsx';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import Private from './screens/Private.jsx';
import PrivateRoute from './Routes/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path='/register' exact render={props => <Register {...props} />} />
      <PrivateRoute path="/home" exact component={Private} />
      <Redirect to='/login' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
