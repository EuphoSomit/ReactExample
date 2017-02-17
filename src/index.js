import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import Perf from 'react-addons-perf'
import App from './containers/App';
import NoMatch from './containers/NoMatch';
import Products from './components/Products';
import Product from './components/Product';
import LifeCycle from './components/LifeCycle';
import MyHOC from './components/HOC';
import './index.css';

window.Perf = Perf;

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={App} >
        <IndexRedirect to="/products" />
        <Route path="products" component={Products}>
            <Route path="/product/:productId" component={Product}/>
        </Route>
        <Route path="lifecycle" component={LifeCycle} />
        <Route path="myhoc" component={MyHOC} />
        <Route path="*" component={NoMatch}/>
    </Route>
  </Router>),
  document.getElementById('root')
);