import React from 'react'

function Staff({staff, key}) {
  return (
     <div className='card'>
        <div className='card-body'>
           I am {staff.name}, {staff.age} years old. I know {staff.skill}
        </div>
      </div>
  )
}

export default Staff;