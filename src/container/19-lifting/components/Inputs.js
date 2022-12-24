import React from "react";

const scaleName = {
   c: 'Celsious',
   f: 'Fahrenheit'
}

function TemperatureInput({temperature, scale, onTemperatureChange}){
   return (
      <div className="card m-2">
         <div className="card-body">
            <div className="form-group">
               <label>Enter the temperature {scaleName[scale]}</label>
               <input
                  type="text"
                  value={temperature}
                  onChange={(e) => onTemperatureChange(e, scale)}
                  className="form-control"
               />
            </div>
         </div>
      </div>
   )
}
export default TemperatureInput;