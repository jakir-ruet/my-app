import React from "react";

function CustomCard(props) {
   const { titleText, bodyText } = props;
   return (
      <div className="card">
         <div className="card-header">
            <h2 className="card-title">{titleText}</h2>
         </div>
         <div className="card-body">
            <p>{bodyText}</p>
         </div>
      </div>
   )
}

export default CustomCard;