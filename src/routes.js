import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import Homepage from './components/Homepage';
import Blog from './components/Blog';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route component={App}>
    <IndexRoute component={Homepage}/>
    <Route path="" component={Homepage}/>
    <Route path="blog" component={Blog}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;