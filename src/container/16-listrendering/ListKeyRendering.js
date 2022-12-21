import React from "react";

function ListKeyRendering() {
   const staffsName = ['Jakir', 'Jasim', 'Jakia', 'Jabir']
   const staffName = staffsName.map((name, index) => <p key={index}>{name}</p>)
   return (
      <div className="card m-2">
         <div className="card-body">
            <div className="card m-2">
               <div className="card-body">
                  {staffsName}
               </div>
            </div>
            <div className="card m-2">
               <div className="card-body">
                  {staffName}
               </div>
            </div>
         </div>
      </div>
   )
}
export default ListKeyRendering;