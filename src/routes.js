import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UserForm from './pages/UserForm';
import UserList from './pages/UserList';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" exact component={UserList} />
        <Route path="/users/create" component={UserForm} />
        <Route path="/users/edit/:id" component={UserForm} />
      </Switch>
    </BrowserRouter>
  )
}
