import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import GroupsContainer from '../container/GroupsContainer';
import GroupShowContainer from '../container/GroupShowContainer';
import UserShowContainer from '../container/UserShowContainer';
import NewGroupForm from './NewGroupForm'
import NewCharityForm from './NewCharityForm'
export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={GroupsContainer} />
      <Route path='/groups/:id' >
        <IndexRoute component={GroupShowContainer} />
        <Route path='/group/new' component={NewGroupForm}/>
        <Route path='charities/new' component={NewCharityForm}/>
      </Route>
      <Route path='/users/:id' component={UserShowContainer}/>
    </Router>
  )}

export default App
