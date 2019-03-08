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
			<span style={{ color: 'red'}}>
				{this.props.product.name}
			</span>;
		let price = this.props.product.price ?
			<span style={{ color: 'red'}}>
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
	render(){
		let rows = [];
		let lastTitle = null;

		this.props.products.forEach( product => {
		});
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
