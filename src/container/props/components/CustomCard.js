import React from "react";

function CustomCard(props) {
   console.log(props)
   const{name, address}= props
   return (
      <div>
         <p>{ name }</p>
         <p>{ address }</p>
      </div>
   )
}
export default CustomCard;
