import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }
  handleValueChange(e) {
    this.props.getValue(e.target.value);
  }
  handleCheckChange(e) {
    this.props.getCheck(e.target.checked);
    console.log(e.target.checked);
  }
  render() {
    return(
      <div className="Search">
	<input type="text" placeholder="请输入商品名称"
	  value={this.props.value}
	  onChange={this.handleValueChange}
	/>
	<p>
	  <input type="checkbox"
	    checked={this.props.checked}
	    onChange={this.handleCheckChange}
	  />
	  只显示有库存的商品
	</p>
      </div>
    ); 
  }
}

class TableTitle extends Component {
  render() {
    return <tr><th>{this.props.title}</th></tr>;
  }
}

class TableBody extends Component {
  render() {
    let name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: "red"}}>
	{this.props.product.name}
      </span>;
    let price = this.props.product.stocked ?
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

class Table extends Component {
  render() {
    let rows = [];
    let lastTitle = null;
    this.props.products.forEach((product) => {
      if(product.name.indexOf(this.props.value) || (!product.stocked && this.props.checked)) {
	return;
      }
      if(product.title !== lastTitle){
	rows.push(<TableTitle title={product.title} key={product.title} />);
      }
      rows.push(<TableBody product={product} key={product.name} />);
      lastTitle = product.title;
    });
    return(
      <table>
	<thead>
	  <tr>
	    <th>价格</th>
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
        <h3>商品检索功能</h3>
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
