import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventry'
import Items from './Items'

class App extends React.Component{
  render () {
    return(
      <div>
        <Header  tagline="Best111111 deal of the day!!"/>
        <Items />
        <Order />
        <Inventory/>
      </div>
      
    ) ;
  }
  
}

export default App;