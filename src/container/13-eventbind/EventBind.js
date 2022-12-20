import React, { Component } from "react";

class EventBind extends Component{
   constructor() {
      super();
      this.state = {
         message: 'Welcome to learning React JS'
      }
      this.BindHandler = this.BindHandler.bind(this); // (1) for last one we can bind data
   }

   // BindHandler() { // (2 & 3)
   //    this.setState({
   //       message: 'Goodbye to leaning React JS'
   //    })
   //    console.log(this)
   // }

   BindHandler = () => { //arrow function out of button
      this.setState({
         message: 'Goodbye to leaning React JS'
      })
   }

   render() {
      return (
         <div className="card m-2">
            <div className="card-body">
               <p>{this.state.message}</p>
               {/* <button onClick={this.BindHandler} className="btn btn-danger">Click Me</button> */} { /* 1 */ } 
               {/* <button onClick={this.BindHandler.bind(this)} className="btn btn-danger">Click Me</button> */} { /* 2 */ }
               {/* <button onClick={() => this.BindHandler()} className="btn btn-danger">Click Me</button> */} { /* 3 using arrow function in button */ }
               <button onClick={this.BindHandler} className="btn btn-danger">Click Me</button> { /* 4 using arrow function out button */ }
            </div>
         </div>
      )
   }
}
export default EventBind;