import React, { Component } from "react";

class CustomCardClassCom extends Component{
   render() {
      return (
         <div>
            <p>{this.props.name}</p>
            <p>{this.props.des}</p>
         </div>
      )
   }
}

export default CustomCardClassCom;