import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//输入框组件
class Search extends Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }
  handleValueChange(e) {
    this.props.getValue(e.target.value);
  }
  handleCheckChange(e){
    this.props.getCheck(e.target.checked);
  }
  render() {
    return (
      <div className="Search">
	<input type="text" placeholder="Search..."
	  value={this.props.value}
	  onChange={this.handleValueChange}
	/>
	<p>
	  <input type="checkbox"
	    checked={this.props.checked}
	    onChange={this.handleCheckChange}
	  />
	  只显示有存货的商品
	</p>
      </div>
    );
  }
}

//表格头部组件
class TableTitle extends Component {
  render() {
    return (
      <tr><th>{this.props.title}</th></tr>
    );
  }
}

//表格内容组件
class TableBody extends Component {
  render() {
    const name = this.props.product.stocked ?
      this.props.product.name : 
      <span style={{color: "red"}}>
	{this.props.product.name}
      </span>;
    const price = this.props.product.stocked ?
      this.props.product.price : 
      <span style={{color: "red"}}>
	缺货
      </span>;
    return(
      <tr>
	<td>{name}</td>
	<td>{price}</td>
      </tr>
    );
  }
}

//表格（父组件）
class Table extends Component {
  render() {
    let rows = [];
    let lastTitle = null;
    this.props.products.forEach((product) => {
      if(product.name.indexOf(this.props.value) === -1 
	|| (!product.stocked && this.props.checked)
      ){
	return;
      }
      if(product.title !== lastTitle) {
	rows.push(<TableTitle title={product.title} key={product.title} />);
      }
      rows.push(<TableBody product={product} key={product.name} />);
      lastTitle = product.title;
    });
    return (
      <table>
	<thead>
	  <tr>
	    <th>Name</th>
	    <th>Price</th>
	  </tr>
	</thead>
	<tbody>
	  {rows}
	</tbody>
      </table>
    );
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      checked: false
    };
    this.getValue = this.getValue.bind(this);
    this.getCheck = this.getCheck.bind(this);
  }
  getValue(value) {
    this.setState({
      value: value
    });
  }
  getCheck(checked) {
    this.setState({
      checked: checked
    });
  }
  render() {
    const PRODUCTS = [
      {title: '电子产品', name: '手机', price: '$99.99', stocked: true},
      {title: '电子产品', name: '电脑', price: '$101.99', stocked: false},
      {title: '体育产品', name: '篮球', price: '$102.99', stocked: false},
      {title: '体育产品', name: '棒球', price: '$103.99', stocked: true},
      {title: '家具产品', name: '桌子', price: '$100.99', stocked: true},
      {title: '家具产品', name: '椅子', price: '$105.99', stocked: false}
    ];
    return (
      <div className="App">
	<h3>产品检索页面</h3>
	<Search 
	  getValue={this.getValue}
	  getCheck={this.getCheck}
	/>
	<Table 
	  products={PRODUCTS}
	  value={this.state.value}
	  checked={this.state.checked}
	/>
      </div>
    );
  }
}

export default App;
