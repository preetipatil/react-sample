import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App.js';
import Home from './Home.js';
import NotFound from './NotFound';

const Router = () =>{
  return(
    <BrowserRouter>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/user/:name" component={App} /> 
         <Route  component={NotFound} />
       </Switch>
    </BrowserRouter>
  );
}

export default Router;