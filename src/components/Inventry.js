import React from 'react';
import AddProductForm from "./AddProductForm.js";

class Inventory extends React.Component{
  render () {
    return(
      <div className="inventory">
        <span>Inventory!!</span>
        <AddProductForm addProduct={this.props.addProduct} />
        <button onClick={this.props.loadProducts}>
          Load Sample Products
        </button>
      </div>
    ) ;
  }
  
}

export default Inventory;