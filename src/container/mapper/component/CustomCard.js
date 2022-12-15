import React from "react";

function CustomCard(props) {
   const { nameText, addressText } = props;
   return (
      <div>
         <p>{ nameText }</p>
         <p>{ addressText }</p>
      </div>
   )
}
export default CustomCard;
