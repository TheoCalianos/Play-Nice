import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import GroupsContainer from '../container/GroupsContainer';
export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={GroupsContainer} />
    </Router>
  )}

export default App
