import React from 'react';
import {render} from 'react-dom';
import Router from './components/Router.js';
import './css/style.css';

// class HeadingStory extends React.Component{
//
//   render(){
//     return (
//       //<p> Hi Hello </p>
//       <App />
//
//     )
//    };
// }
//ReactDOM.render(<HeadingStory />, document.getElementById('root'));

render( <Router />, document.getElementById("root"));
