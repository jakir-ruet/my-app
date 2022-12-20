import React, { Component } from "react";

class MySetState extends Component{
   constructor() {
      super();
      this.state = {
         count: 0
      }
   }

   Increment() {
      this.setState({
         count: this.state.count + 1
      })
   }

   Decrement() {
      this.setState({
         count: this.state.count - 1
      })
   }

   render() {
      return (
         <div className="card m-2">
            <div className="card-body">
               <div className="d-flex flex-row justify-content-center">
                  <div className="p-2 bd-highlight">
                     <button onClick={() => this.Increment()} className="btn btn-success">Increment</button>
                  </div>
                  <div className="p-2 bd-highlight">
                     <h1>{this.state.count}</h1>
                  </div>
                  <div className="p-2 bd-highlight">
                     <button onClick={() => this.Decrement()} className="btn btn-danger">Decrement</button>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default MySetState;