import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }
  handleValueChange(e) {
    this.props.getValue(e.target.value);
  }
  handleCheckChange(e) {
    this.props.getCheck(e.target.checked);
  }
  render() {
    return (
      <div className='Search'>
	<input type="text" placeholder='Search...'
	  value = {this.props.value}
	  onChange = {this.handleValueChange}
	/>
	<p>
	  <input type="checkbox"
	    checked={this.props.checked}
	    onChange={this.handleCheckChange}
	  />
	  是否只显示有货的商品
	</p>
      </div>
    );
  }
}
class TableTitle extends Component {
  render() {
    return (
      <tr>
	<td>{this.props.title}</td>
      </tr>
    );
  }
}
class TableBody extends Component {
  render() {
    let name = this.props.product.stocked ?
      this.props.product.name : 
      <span style={{ color: 'red' }}>
	{ this.props.product.name }
      </span>;
    let price = this.props.product.stocked ?
      this.props.product.price :
      <span style={{ color: 'red' }}>
	缺货
      </span>
      return (
	<tr>
	  <td>{name}</td>
	  <td>{price}</td>
	</tr>
      );
  }
}
class Table extends Component {
  render() {
    let rows = [];
    let lastTitle = null;
    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.value) === -1 || (!product.stocked && this.props.checked)){
	return;
      }
      if(product.title !== lastTitle){
	rows.push(<TableTitle title={product.title} key={product.title} />);
      }
      rows.push(<TableBody product={product} key={product.name} />);
      lastTitle = product.title;
    });
    return (
      <div className="Table">
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
      </div>
    );
  }
}
class App extends Component {
  constructor() {
    super();
    this.state ={
      value: '',
      checked: false
    };
    this.getValue = this.getValue.bind(this);
    this.getCheck = this.getCheck.bind(this);
  }
  getValue(value){
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
      { title: '生活用品', name: '牙刷', price: '$11.9', stocked: true},
      { title: '生活用品', name: '牙膏', price: '$10.9', stocked: true},
      { title: '生活用品', name: '肥皂', price: '$12.10', stocked: false},
      { title: '体育用品', name: '篮球', price: '$14.9', stocked: true},
      { title: '体育用品', name: '棒球', price: '$13.9', stocked: true},
      { title: '体育用品', name: '足球', price: '$15.9', stocked: true},
      { title: '其他用品', name: '拖鞋', price: '$16.9', stocked: true},
      { title: '其他用品', name: '睡衣', price: '$17.9', stocked: false},
    ];
    return (
      <div className="App">
	<h2>商品检索功能模块</h2>
	<Search 
	  getValue = {this.getValue}
	  getCheck = {this.getCheck}
	/>
	<Table 
	  products = {PRODUCTS}
	  value = {this.state.value}
	  checked = {this.state.checked}
	/>
      </div>
    );
  }
}

export default App;
