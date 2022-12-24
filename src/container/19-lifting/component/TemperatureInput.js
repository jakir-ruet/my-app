import React from "react";

const scaleName = {
   c: 'Celsious',
   f: 'Fahrenheit'
}

function TemperatureInput(temperature, scale, onTemperatureChange){
   return (
      <div className="card m-2">
         <div className="card-body">
            <div className="form-group">
               <label htmlFor="teperature">Enter the temperature {scaleName[scale]}</label>
               <input type="text" value={temperature} onChange={onTemperatureChange}  className="form-control"/>
            </div>
         </div>
      </div>
   )
}
export default TemperatureInput;