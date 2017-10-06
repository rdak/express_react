import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import Homepage from './components/Homepage';
import Quiz from './components/Quiz';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage}/>
    <Route path="quiz" component={Quiz}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;