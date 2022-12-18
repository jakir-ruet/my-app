import React, { Component } from "react";

class MyState extends Component{
   constructor(props) {
      super(props)
      this.state = {
         count: 0
      }
   }
   render() {
      const { count } = this.state;
      return (
         <div className="container">
            <div className="row text-center">
               <div className="col-md-6 offset-3">
                  <div className="d-flex flex-row bd-highlight">
                     <div className="p-2 bd-highlight">
                        <button className="btn btn-primary">+</button>
                     </div>
                     <div className="p-2 bd-highlight"><h2>{count}</h2></div>
                     <div className="p-2 bd-highlight">
                        <button className="btn btn-primary">-</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
export default MyState;