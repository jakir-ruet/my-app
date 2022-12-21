import React from "react";
import Staff from "./component/Staff";

function ListKeyRendering() {
   const staffsName = ['Jakir', 'Jasim', 'Jakia', 'Jabir']
   const staffs = [
      {
         id: 1,
         name: 'Jakir',
         age: 35,
         skill: 'ReactJS'
      },
      {
         id: 2,
         name: 'Jasim',
         age: 30,
         skill: 'NodeJS'
      },
      {
         id: 1,
         name: 'Jakia',
         age: 25,
         skill: 'NextJS'
      }
   ]
   // const staffList = staffs.map(staff => < Staff key={staff.id} staff={staff} />)
   const staffName = staffsName.map((a, index) => <p key={index}>{index}{a}</p>)
   return (
      <div className="card m-2">
         <div className="card-body">
            {staffName}
         </div>
      </div>
   )
}
export default ListKeyRendering;