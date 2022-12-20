import React, { Component } from "react";

class ClassComponent extends Component{
   clickMe() {
      console.log('Thanks for clicked on Me')
   }
   render() {
      return (
         <div className="card m-2">
            <div className="card-body">
               <button onClick={this.clickMe} className="btn btn-success">Click Me</button>
            </div>
         </div>
      )
   }
}

export default ClassComponent;