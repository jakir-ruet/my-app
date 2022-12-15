import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Lists = [
   {
      id: uuidv4(),
      name: 'I am Jakir',
      address: 'Rajshahi'
   },
   {
      id: uuidv4(),
      name: 'I am Jasim',
      address: 'Dhaka'
   },
   {
      id: uuidv4(),
      name: 'I am Jakia',
      address: 'Chattogram'
   },
];

const ListView = () => {
   return (
      <div>
         <p>mapping by Id</p>
         {Lists.map((List) => {
            const { id, name, address } = List;
            return (
               // <div key={List.id}>
               //    <p>{ List.name }</p>
               //    <p>{ List.address }</p>
               // </div>
               <div key={id}>
                  <p>{ name }</p>
                  <p>{ address }</p>
               </div>
            )
         })}
      </div>
   )
}

export default ListView;