import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TableTitle extends Component {
  render(){
    return (
      <tr> <td>{this.props.title}</td> </tr>
    );
  }
}

class TableBody extends Component {
  render(){
    let name = this.props.product.stocked ? 
      this.props.product.name : 
      <span style={{ color: 'red' }}>
	{this.props.product.name}
      </span>;
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
  render(){
    let rows = [];
    let lastTitle = null;
    this.props.products.forEach((product) => {
      if(product.name.indexOf){
	return;
      }
      if(lastTitle !== product.title){
	rows.push(<TableTitle title={product.title} key={product.title} />);
      }
      rows.push(<TableBody product={product} key={product.name} />);
      lastTitle = product.title;
    });
    return (
      <table>
	<thead>
	  <tr>
	    <td>Name:</td>
	    <td>Price:</td>
	  </tr>
	</thead>
	<tbody>
	  {rows}
	</tbody>
      </table>
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
  render(){
    return(
      <div className="Search">
	<input type="text" placeholder="Search..."
	  value={this.props.value}
	  onChange={this.handleValueChange}
	/>
	<p>
	  <input type="checkbox"
	    checked={this.props.checked}
	    onChange={this.handleChackChange}
	  />
	  只显示有存货的物品
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
      { title: 'ball', name: '篮球', price: '$99', stocked: true },
      { title: 'ball', name: '足球', price: '$100', stocked: false },
      { title: 'ball', name: '排球', price: '$101', stocked: true },
      { title: 'food', name: '包子', price: '$103', stocked: false },
      { title: 'food', name: '饺子', price: '$104', stocked: true },
      { title: 'food', name: '馅饼', price: '$102', stocked: true },
      { title: 'food', name: '手抓饼', price: '$105', stocked: false }
    ];
    return (
      <div className="App">
	<Search 
	  getValue={this.getValue}
	  getCheck={this.getCheck}
	/>
	<Table 
	  value={this.state.value}
	  checked={this.state.checked}
	  products={PRODUCTS}
	/>
      </div>
    );
  }
}

export default App;
