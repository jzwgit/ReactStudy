import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'FootBall'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'BaseBall'},
  {category: 'Sporting Goods', price: '$29.99', stocked: true, name: 'BasketBall'},
  {category: 'Electronices', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronices', price: '$399.99', stocked: true, name: 'iPhone 8'},
  {category: 'Electronices', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
ReactDOM.render(<App products={PRODUCTS} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
