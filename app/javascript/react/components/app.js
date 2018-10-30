import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import GroupsContainer from '../container/GroupsContainer';
import GroupShowContainer from '../container/GroupShowContainer';
export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={GroupsContainer} />
      <Route path='/groups/:id' >
        <IndexRoute component={GroupShowContainer} />
        </Route>
    </Router>
  )}

export default App
