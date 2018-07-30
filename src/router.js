import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import login from './routes/page/login/login';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={login} />
        <Route path="/indexpage" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
