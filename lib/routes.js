import React from 'react';
import { render } from 'react-dom';
import { Router, Route, createMemoryHistory, IndexRoute } from 'react-router';
import MainPage from './Main';
import EditPage from './Edit';

export default (
  <Router history={createMemoryHistory()}>
    <Route path="/" component={MainPage}/>
  </Router>
)
