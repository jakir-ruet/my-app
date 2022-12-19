import React, { Component } from "react";

class MyState extends Component{
   constructor() {
      super();
      this.state = {
         message: 'Hello, I am taking from state of react js'
      }
   }
   ChangeMessage() {
      this.setState ({
         message: 'Hello, I am also taking from state of react js'
      })
   }
   render() {
      return (
         <div className="card-body">
            <p>{this.state.message}</p>
            <button onClick={() => this.ChangeMessage()} className="btn btn-danger">Click & Test State</button>
         </div>
      )
   }
}
export default MyState;