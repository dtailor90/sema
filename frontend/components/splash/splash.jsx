import React from 'react';

class Splash extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='splash-container'>
        <form className="splash-form">
          <input className="nickname" type="text" placeholder="Enter your Nickname"></input>
        </form>
      </div>
    )
  }
}

export default Splash;
