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
    return(
      <div className='Search'>
	<input type="text" placeholder="Search..."
	  value={this.props.value}
	  onChange={this.handleValueChange}
	/>
	<p>
	  <input type="checkbox"
	    checked={this.props.checked}
	    onChange={this.handleCheckChange}
	  />
	  只显示有货的商品
	</p>
      </div>
    );
  }
}

class TableTitle extends Component {
  render() {
    return <tr><td>{this.props.title}</td></tr>;
  }
}

class TableBody extends Component {
  render() {
    let name = this.props.product.stocked ? 
      this.props.product.name :
      <span style={{ color: 'red'}}>
	{this.props.product.name}	
      </span>;
    let price = this.props.product.stocked ? 
      this.props.product.price :
      <span style={{ color: 'red'}}>
	缺货
      </span>;
    return(
      <tr>
        <td>{ name }</td>
        <td>{ price }</td>
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
      if (lastTitle !== product.title){
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

class App extends Component {
  constructor() {
    super();
    this.state={
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
    const products = [
      { title: '电子产品', name: '电话', price: '$299.99', stocked: true },
      { title: '电子产品', name: '电脑', price: '$399.99', stocked: false },
      { title: '电子产品', name: '电灯', price: '$99.99', stocked: true },
      { title: '生活用品', name: '桌子', price: '$199.99', stocked: false },
      { title: '生活用品', name: '椅子', price: '$9.99', stocked: true },
      { title: '生活用品', name: '窗子', price: '$29.99', stocked: true }
    ];
    return (
      <div className="App">
	<Search 
	  getValue={this.getValue}
	  getCheck={this.getCheck}
	/>
	<Table
	  products={products}
	  value={this.state.value}
	  checked={this.state.checked}
	/>
      </div>
    );
  }
}

export default App;
