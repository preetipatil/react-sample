import React from 'react';

class Home extends React.Component{
  userName = React.createRef();
  
  getUserName = (e) => {
    e.preventDefault();
    const userName = this.userName.current.value;
    //console.log(userName);
    //redirect page to store
    this.props.history.push(`user/${userName}`);
  };
  
  
  render () {
    return(
      <div>
        <form className="homeForm" onSubmit={this.getUserName}>
          <h2>Please Enter Your Name</h2>
          <input type="text"
                 ref={this.userName}
                 required placeholder="Name"
          />
          <button type="submit">Submit →</button>
          
        </form>
      </div>
    
    ) ;
  }
  
}

export default Home;