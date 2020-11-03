import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Users from './pages/Users';

import { Context } from './Context/AuthContext';


function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated } = useContext(Context);

  if(isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />
}

export default function Routes() {
  const { loading } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Switch>
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute isPrivate exact path="/users" component={Users} />
      <Redirect to="/users" />
    </Switch>
  );
}