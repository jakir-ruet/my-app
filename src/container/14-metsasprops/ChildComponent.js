import React from "react";

function ChildComponent(props) {
   return (
      <div className="card m-2">
         <div className="card-body">
            {/* <button onClick={props.greetHandler} className="btn btn-danger">Click Me</button> */}
            <button onClick={() => props.greetHandler('child')} className="btn btn-danger">Click Me</button> { /*using arrow function*/ }
         </div>
      </div>
   )
}
export default ChildComponent;