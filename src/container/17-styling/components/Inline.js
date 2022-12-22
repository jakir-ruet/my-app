import React from "react";

const myInlineStyle = {
   backgroundColor: 'red',
   color: 'white',
   padding: '10px'
}

function Inline() {
   return (
      <div>
         <h1 style={myInlineStyle}>I am taking from Inline CSS</h1>
      </div>
   )
}
export default Inline;