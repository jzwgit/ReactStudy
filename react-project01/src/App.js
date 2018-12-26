import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Search extends Component {
  constructor () {
    super();
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }

  handleFilterTextInputChange (e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInputChange(e){
    this.props.onInStockInput(e.target.checked);
  }
  
  render () {
    return (
      <div className = "search">
	<input type="text" value=""  placeholder = "Search ... " 
	  value={this.props.filterText}
	  onChange={this.handleFilterTextInputChange}
	/>
	<p>
	  <input type="checkbox" 
	    checked={this.props.inStockOnly}
	    onChange={this.handleInStockInputChange}
	  />
	  {''}
	  只显示有存货的产品
	</p>
      </div>
    );
  }
}
class Biaoti extends Component {
  render() {
    return (
      <tr><th colSpan="2">{this.props.title}</th></tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}
class ProductTable extends Component {
  render(){
    var rows = [];
    var lastCategroy = null;
    this.props.products.forEach((product)=>{
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)){
	return;
      }

      if(product.title !== lastCategroy){
	rows.push(<Biaoti title={product.title} key={product.title} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategroy = product.title;
    });
    return (
      <table>
	<thead>
	  <tr>
	    <th>Name</th>
	    <th>Price</th>
	  </tr>
	</thead>
	<tbody>{rows}</tbody>
      </table>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);
  }
  handleFilterTextInput(filterText){
    this.setState({
      filterText: filterText
    });
  }
  handleInStockInput(inStockOnly){
    this.setState({
      inStockOnly: inStockOnly
    });
  }
  render() {
    return (
      <div className="app">
	<h2>产品搜索</h2>
	<Search 
	  filterText={this.state.filterText}
	  inStockOnly={this.state.inStockOnly}
	  onFilterTextInput={this.handleFilterTextInput}
	  onInStockInput={this.handleInStockInput}
	/>
	<ProductTable 
	  products={this.props.products} 
	  filterText={this.state.filterText}
	  inStockOnly={this.state.inStockOnly}
	/>
      </div>
    );
  }
}

export default App;
