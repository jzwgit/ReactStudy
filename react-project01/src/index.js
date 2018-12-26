import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const PRODUCTS = [
  {title: '体育产品', price: '￥10', stocked: true, name: '足球' },
  {title: '体育产品', price: '￥11', stocked: true, name: '蓝球' },
  {title: '体育产品', price: '￥12', stocked: false, name: '棒球' },
  {title: '电子产品', price: '￥13', stocked: true, name: '手机' },
  {title: '电子产品', price: '￥14', stocked: false, name: '平板电脑' },
  {title: '电子产品', price: '￥15', stocked: true, name: '笔记本' }
]
ReactDOM.render(<App products={PRODUCTS} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
