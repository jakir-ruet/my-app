import React from "react";

function CustomCard(props) {
   const { cardText } = props;
   return (
      <div className="card m-2">
         <div className="card-body">
            <p>{cardText}</p>
         </div>
      </div>
   )
}

export default CustomCard;