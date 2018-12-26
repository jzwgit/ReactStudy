import React,{Component} from 'react';

import ProductTitleRow from './productTitleRow.js';
import ProductRow from './productRow.js';

class ProductTable extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let rows = [];
    let lastTitle = null;
    this.props.products.forEach((product) => {
      if(product.name.indexOf(this.props.value) === -1 || (!product.stocked && this.props.isChecked)) {
	return;
      }
      if(product.title !== lastTitle){
	rows.push(<ProductTitleRow title={product.title} key={product.title} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastTitle = product.title;
    });
    return(
      <div className="productTable">
	<table>
	  <thead>
	    <tr>
	      <th>Name</th>
	      <th>Price</th>
	    </tr>
	  </thead>
	  <tbody>{rows}</tbody>
	</table>
      </div>
    );
  }
}
export default ProductTable;
