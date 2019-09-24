import React from 'react';

class Item extends React.Component{
  render () {
    const {name, price, desc} = this.props.details;
    return(
      <li className="menu-item">
        <h3> {name}  </h3>
        <span className="price">Price: £{price}</span>
       
        <p>Product Description : {desc}</p>
      </li>
    ) ;
  }
  
}

export default Item;