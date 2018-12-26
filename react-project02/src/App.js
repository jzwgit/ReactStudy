import React, { Component } from 'react';
import './App.css';

import Search from './search.js';
import ProductTable from './productTable.js';


class App extends Component {
  constructor() {
    super();	
    this.getChecked = this.getChecked.bind(this);
    this.getValue = this.getValue.bind(this);
    this.state = {
      value: '',
      isChecked: false
    };
  }
  getValue(value) {
    this.setState({
      value: value
    });
  }
  //父组件定义回调函数
  getChecked(isChecked) {
    this.setState({
      isChecked: !isChecked
    }); 
  }
  render() {
    const PRODUCTS = [
      {title: '体育产品', price: '$10', stocked: true, name: 'Football'},
      {title: '体育产品', price: '$20', stocked: false, name: 'BaseBall'},
      {title: '体育产品', price: '$30', stocked: true, name: 'BasketBall'},
      {title: '体育产品', price: '$40', stocked: true, name: 'PingPang'},
      {title: '电子产品', price: '$50', stocked: false, name: 'iPhone'},
      {title: '电子产品', price: '$60', stocked: true, name: 'iPod Touch'},
      {title: '电子产品', price: '$70', stocked: false, name: 'iPad'},
      {title: '电子产品', price: '$80', stocked: true, name: 'iMac'},
    ];
    return (
      <div className="app">
	<Search 
	  getValue={this.getValue} 
	  getChecked={this.getChecked} 
	/> 
	<ProductTable 
	  products={PRODUCTS}
	  value={this.state.value}
	  isChecked={this.state.isChecked}
	/>
      </div>
    );
  }
}

export default App;
