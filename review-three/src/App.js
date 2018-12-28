import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleValue = this.handleValue.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleValue(e) {
    this.props.getValue(e.target.value);
  }
  handleCheck(e) {
    this.props.getCheck(e.target.checked);
  }
  render() {
    return(
      <div className="Search">
	<input type="text" placeholder="Search Somethings"
	  value={this.props.value}
	  onChange={this.handleValue}
	/>
	<p>
	  <input type="checkbox"
	    checked={this.props.checked}
	    onChange={this.handleCheck}
	  />
	  只显示有货的商品
	</p>
      </div>
    );
  }
}

class TableTitle extends Component {
  render() {
    return(
      <tr><th>{this.props.title}</th></tr>
    );
  }
}

class TableBody extends Component {
  render() {
    let name = null;
    let price = null;
    if(this.props.product.stocked) {
      name = this.props.product.name;
      price = this.props.product.price;
    } else {
      name =  
      <span style={{color:'red'}}>
	{this.props.product.name}
      </span>;
      price = 
	<span style={{color:'red'}}>
	  缺货
	</span>;
    }
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
      if(product.name.indexOf(this.props.value) === -1 || (!product.stocked && this.props.checked)) {
	return;
      }
      if(product.title !== lastTitle) {
	rows.push(<TableTitle title={product.title} key={product.title} />);
      }
      rows.push(<TableBody product={product} key={product.name} />);
      lastTitle = product.title;
    });
    return(
      <table>
	<thead>
	  <tr>
	    <th>产品名</th>
	    <th>价格</th>
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
      {title: '生活用品', name: '凳子', price: '$22', stocked: true},
      {title: '生活用品', name: '桌子', price: '$23', stocked: false},
      {title: '生活用品', name: '床', price: '$25', stocked: true},
      {title: '生活用品', name: '平底锅', price: '$32', stocked: true},
      {title: '生活用品', name: '电饭煲', price: '$24', stocked: false},
      {title: '其他用品', name: '零食', price: '$47', stocked: true},
      {title: '其他用品', name: '饮料', price: '$37', stocked: true},
      {title: '体育用品', name: '篮球', price: '$53', stocked: false},
      {title: '体育用品', name: '足球', price: '$54', stocked: true},
      {title: '体育用品', name: '棒球', price: '$60', stocked: true},
    ];
    return (
      <div className="App">
	<h2>产品搜索功能</h2>
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
