import React from "react";
 
function ListRendering() {
   const names = ['Fahmid', 'Tahmid', 'Afrin', 'Jakir']
   const staffs = [
      {
         id: 1,
         name: 'Fahmid',
         age: 5,
         skill: 'ReactJS'
      },
      {
         id: 2,
         name: 'Tahmid',
         age: 10,
         skill: 'RUST'
      },
      {
         id: 3,
         name: 'Afrin',
         age: 30,
         skill: 'Graphics Design'
      },
      {
         id: 4, 
         name: 'Jakir',
         age: 36,
         skill: 'System Admin'
      }
   ]
   // const staffList = staffs.map(staff => <nameList key={ staff.id} staff={staff} />)
   const nameList = names.map((name, index) => <h2 key={index}>{index} - {name}</h2>)
   return (
      <div className="card m-2">
         <div className="card-body">
            { nameList }
         </div>
      </div>
   )
}
export default ListRendering;