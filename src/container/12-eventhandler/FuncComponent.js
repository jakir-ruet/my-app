import React from "react";

function FuncComponent() {
   function clickMe(){
      console.log('clicked done')
   }
   return (
      <div className="card m-2">
         <div className="card-body">
            <button onClick={clickMe} className="btn btn-danger">Click Me</button>
         </div>
      </div>
   )
}
export default FuncComponent;