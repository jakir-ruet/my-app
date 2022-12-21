import React from "react";
 
function ListRendering() {
   const names = ['Fahmid', 'Tahmid', 'Touhida', 'Jakir']
   // Or
   const nameList = names.map(name => <h2>{name}</h2>)
   // Or
   const persions = [
      {
         id: 1,
         name: 'Fahmid',
         age: 5
      },
      {
         id: 2,
         name: 'Tahmid',
         age: 10
      },
      {
         id: 3,
         name: 'Afrin',
         age: 30
      },
      {
         id: 4, 
         name: 'Jakir',
         age: 36
      }
   ]
   const persionList = persions.map(persion => <h2>{persion.id} - {persion.name} - {persion.age}</h2>)
   console.log(persionList)
   return (
      <div className="card m-2">
         <div className="card-body">
            {/* <h3>{ names[0] }</h3>
            <h3>{ names[1] }</h3>
            <h3>{ names[2] }</h3>
            <h3>{ names[3] }</h3> */}

            {/* using map method */}
            {
               names.map(name => <h2>{ name }</h2>)
            }

            {/* Or */}
            {nameList}
            
            {/* Or */}
            { persionList }
         </div>
      </div>
   )
}
export default ListRendering;