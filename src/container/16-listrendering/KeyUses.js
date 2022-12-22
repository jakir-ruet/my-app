import React from "react";

// function KeyUses() {
//    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//    const numberUpdate = numbers.map((number) => number * 2)
//    return (
//       <div key={numbers.index}>
//          {numberUpdate}
//       </div>
//    )
// }
// export default KeyUses;

function KeyUses() {
   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
   const listItems = numbers.map((number, index) => <li key={number}>{number}</li>)
   return (
      <div>
         <ul>{listItems}</ul>
      </div>
   )
}
export default KeyUses;