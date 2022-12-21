import React from "react";

function Staff({staff, key}) {
   return (
      <div className="card m-2">
         <div className="card-body">
            {staff.id} - {staff.name} - {staff.age} - {staff.skill}
         </div>
      </div>
   )
}
export default Staff;