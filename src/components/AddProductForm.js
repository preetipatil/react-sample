import React from 'react';


class AddProductForm extends React.Component{
  productNameRef = React.createRef();
  productPriceRef = React.createRef();
  productDescRef = React.createRef();
  
  
  createProduct= (e) => {
    e.preventDefault();
    const product = {
      name: this.productNameRef.current.value,
      price: this.productPriceRef.current.value,
      desc: this.productDescRef.current.value,
    };
    
    this.props.addProduct(product);
    e.currentTarget.reset();
                       console.log(product);
  }
  render () {
    return(
      <form name="product-add" onSubmit={this.createProduct}>
        <div className="product">
          <input type="text" name="productName" ref={this.productNameRef} placeholder="Name" />
          <br/>
          <input type="text" name="productPrice" ref={this.productPriceRef} placeholder="Price" />
          <br/>
          <textarea name="productDesc" ref={this.productDescRef} placeholder="Description"></textarea>
          <br/>
          <button type="submit">+Add Product</button>
        </div>
      </form>
    ) ;
  }
  
}

export default AddProductForm;