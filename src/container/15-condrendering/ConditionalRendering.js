/* eslint-disable no-unreachable */
import React, { Component } from "react";

class ConditionalRendering extends Component{
   constructor(props) {
      super(props)
      this.state = {
         isLoggedIn: true
      }
   }
   render() {
      // Way one
      // if (this.state.isLoggedIn) {
      //    return (
      //       <div className="card m-2">
      //          <div className="card-body">
      //             <p className="text-success">Hello, LoggedIn</p>
      //          </div>
      //       </div>
      //    )
      // }
      // else {
      //    return (
      //       <div className="card m-2">
      //          <div className="card-body">
      //             <p className="text-danger">Hello, Logged Out</p>
      //          </div>
      //       </div>
      //    )

      // Way two
      let message
      if (this.state.isLoggedIn) {
         return (
            <div className="card m-2">
               <div className="card-body">
                  <p className="text-success">Hello, LoggedIn</p>
               </div>
            </div>
         )
      }
      else {
         return (
            <div className="card m-2">
               <div className="card-body">
                  <p className="text-danger">Hello, Logged Out</p>
               </div>
            </div>
         )
      }
      return (
         <div>{ message}</div>
      )

      // return (
      //    <div className="card m-2">
      //       <div className="card-body">
      //          <h1>Working good</h1>
      //       </div>
      //    </div>
      // )
   }
}

export default ConditionalRendering;