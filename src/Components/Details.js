import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Details.css';


export default class Details extends React.Component {

  constructor(){
  super()
  this.state={
  name:"React"
  
  
  }
}
  render()
  {
    const {message} = this.props;

  return (


    <div className="social">
      
        
         { message }


       {/* <h3>{this.props.data.unit}</h3>
       <button onClick={()=>this.props.data.changeUnit("child unit")}/> */}

       <FacebookIcon />
       <TwitterIcon/>
       <LinkedInIcon/>
    </div>
  )
  }
}



