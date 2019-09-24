import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventry'
import Item from './Item';
import sampleProducts from '../sampleProducts';

class App extends React.Component{
  state = {
    products : {},
  };
  
  addProduct = (product) =>{
    //copy existing state
    const products = {...this.state.products};
    //add new product to above products
    products[`product${Date.now()}`] = product;
    //set new products object to State
    this.setState({products});
    console.log("added a Product")
  }
  
  loadProducts =() =>{
    console.log("loading a Product")  ;
    this.setState({products: sampleProducts}) ;
  }
  render () {
    return(
      <div className="container">
        <Header  tagline="Best deal of the day!!"/>
          <div className="itemsList">
              <span>Your Products</span>
              <ul>
                {Object.keys(this.state.products).map(key =>
                  (
                  <Item
                    key ={key}
                    details={this.state.products[key]}
                  />
                  ))}
                
              </ul>
          </div>
        <div className="container2">
          <Order />
          <Inventory addProduct={this.addProduct} loadProducts={this.loadProducts}/>
        </div>
      </div>
      
    ) ;
  }
  
}

export default App;