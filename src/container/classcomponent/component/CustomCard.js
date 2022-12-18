import React from "react";

function Card(props) {
   return (
      <div>
         <p>{props.name}</p>
         <p>{props.des}</p>
      </div>
   )
}

export default Card;