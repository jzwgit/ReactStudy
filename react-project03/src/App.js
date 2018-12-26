import React, { Component } from 'react';
import './App.css';

//搜索组件
class Search extends Component {
  constructor(props) {
    super(props);
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleInputCheckChange = this.handleInputCheckChange.bind(this);
  }
  handleInputValueChange(e) {
    this.props.getInputValue(e.target.value);
  }
  handleInputCheckChange(e) {
    this.props.getInputCheck(e.target.checked);
  }
  render() {
    return(
      <div className="search">
	<input type="text" placeholder="Search..." 
	  value={this.props.value} 
	  onChange={this.handleInputValueChange}
	/>
	<p>
	  <input type="checkbox" 
	    checked = {this.props.onChecked}
	    onChange={this.handleInputCheckChange}
	  />
	  是否只显示有货的商品
	</p>
      </div>
    );
  }
}

//表格头部
class TableTitle extends Component {
  render() {
    return <tr><td>{this.props.title}</td></tr>;
  }
}

//表格信息
class TableBody extends Component {
  render() {
    let name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color:"red"}}>
	{this.props.product.name}
      </span>;
    let price = this.props.product.stocked ?
      this.props.product.price : 
      <span style={{color:"blue"}}>
	缺货
      </span>
      ;
    return(
      <tr>
	<td>{name}</td>
	<td>{price}</td>
      </tr>
    );
  }
}

//表格父组件
class Table extends Component {
  render() {
    let rows = [];
    let lastTitle = null;
    this.props.products.forEach((product) => {
      if(product.name.indexOf(this.props.value) === -1 || (!product.stocked && this.props.onChecked)) {
	return;
      }
      if(product.title !== lastTitle){
	rows.push(<TableTitle title={product.title} key={product.title} />);
      }
      rows.push(<TableBody product={product} key={product.name} />);
      lastTitle = product.title;
    });
    return(
      <div className="table">
	<table>
	  <thead>
	    <tr>
	      <th>商品名</th>
	      <th>价格</th>
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
    this.state = {
      value: '',
      onChecked: false
    }
    this.getInputValue = this.getInputValue.bind(this);
    this.getInputCheck = this.getInputCheck.bind(this);
  }
  getInputValue(value) {
    this.setState({
      value: value
    });
  }
  getInputCheck(checked) {
    this.setState({
      onChecked: checked
    });
  }
  render() {
    const PRODUCTS = [
      {title: '生活用品', name: '牙膏', price: '$1.99', stocked: true},
      {title: '生活用品', name: '牙刷', price: '$2.99', stocked: false},
      {title: '生活用品', name: '洗发水', price: '$7.99', stocked: true},
      {title: '体育用品', name: '球鞋', price: '$20.99', stocked: true},
      {title: '体育用品', name: '篮球', price: '$50.99', stocked: false},
      {title: '体育用品', name: '足球', price: '$30.99', stocked: true},
    ];
    return (
      <div className="App">
	<h2>产品搜索</h2>
	<Search
	  value={this.state.value}
	  onChecked={this.state.onChecked}
	  getInputValue={this.getInputValue}
	  getInputCheck={this.getInputCheck}
	/>
	<Table 
	  value={this.state.value}
	  onChecked={this.state.onChecked}
	  products={PRODUCTS}
	/>
      </div>
    );
  }
}

export default App;
