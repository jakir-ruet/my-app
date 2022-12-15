import React from "react";

const Lists = [
   {
      name: 'I am Jakir',
      address: 'Rajshahi'
   },
   {
      name: 'I am Jasim',
      address: 'Dhaka'
   },
   {
      name: 'I am Jakia',
      address: 'Chattogram'
   },
];

const ListView = () => {
   return (
      <div>
         <p>mapping by Id</p>
         {Lists.map((List, index) => { 
            return (
               <div key={index}>
                  <p>{ List.name }</p>
                  <p>{ List.address }</p>
               </div>
            )
         })}
      </div>
   )
}

export default ListView;