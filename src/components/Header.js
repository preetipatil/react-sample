import React from 'react';

const Header = (props) =>
    (
      <header className="shopHeader">
        <h1>My Shop</h1>
        <span>{props.tagline}</span>
      </header>
    ) ;

export default Header;