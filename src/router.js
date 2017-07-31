import React from 'react';
import { Router, Route } from 'dva/router';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import IndexPage from './routes/IndexPage';

import Index from "./routes/Index.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Index} />
      <Route path="/index" component={Index} />
    </Router>
  );
}

export default RouterConfig;
