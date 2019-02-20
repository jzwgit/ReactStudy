import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TableTitle extends Component {
  render() {
    return (
      <tr> <td>{this.props.title}</td> </tr>
    );
  }
}

class TableBody extends Component {
  render() {
    let name = this.props.product.stocked ?
      this.props.product.name : 
      <span style={{ color: 'red' }}>{this.props.product.name}</span>;
    let price = this.props.product.stocked ?
      this.props.product.price : 
      <span style={{ color: 'red' }}>
	缺货
      </span>;
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
      if(product.name.indexOf(this.props.value) === -1 || (!product.stocked && this.props.checked)){
	return;
      }
      if(lastTitle !== product.title){
	rows.push(<TableTitle title={product.title} key={product.title} />);
      }
      rows.push(<TableBody product={product} key={product.name} />);
      lastTitle=product.title
    });
    return (
      <div className="Table">
	<table>
	  <thead>
	    <tr>
	      <td>Name</td>
	      <td>Price</td>
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

class Search extends Component {
  constructor(props){
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }
  handleValueChange(e){
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

class App extends Component {
  constructor(){
    super();
    this.state = {
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
  getCheck(checked){
    this.setState({
      checked: checked
    });
  }
  render() {
    const PRODUCTS = [
      { title: '生活用品', name: '洗发水', price: '￥19.8', stocked: true },
      { title: '生活用品', name: '洗脚水', price: '￥20.8', stocked: false },
      { title: '生活用品', name: '洗脸水', price: '￥21.8', stocked: true },
      { title: '体育用品', name: '篮球', price: '￥22.9', stocked: true },
      { title: '体育用品', name: '足球', price: '￥23.8', stocked: false },
      { title: '体育用品', name: '棒球', price: '￥25.8', stocked: true }
    ];
    return (
      <div className="App">
	<Search getValue={this.getValue}
	  getCheck={this.getCheck}
	/>
	<Table products={PRODUCTS}
	  value={this.state.value}
	  checked={this.state.checked}
	/>
      </div>
    );
  }
}

export default App;
