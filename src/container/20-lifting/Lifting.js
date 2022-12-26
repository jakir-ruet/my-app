import React from "react";

function Lifting({celsius = 0}) {
   if (celsius >= 100) {
      return (
         <div className="alert alert-primary m-2" role="alert">
            Water is boil
         </div>
      )
   }
   return (
      <div className="alert alert-danger m-2" role="alert">
         Water is not boil
      </div>
   )
}
export default Lifting;