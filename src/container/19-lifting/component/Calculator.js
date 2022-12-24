import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelsius, toFahrenheit } from './Converter';
import

class Calculator extends Component{
   state = {
      temperature: '',
      scale: 'c'
   }
   handleChange = (e, scale) => {
      this.setState({
         temperature: e.target.value,
         scale: e.target.value,
         // temperature: e.target.value, scale
      })
   }
   render() {
      const { temperature, scale } = this.state
      const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature
      const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature
      return (
         <div className="card m-2">
            <div className="card-body">
               <TemperatureInput
                  scale='c'
                  temperature={celsius}
                  onTemperatureChange={this.handleChange}
               />
               <TemperatureInput
                  scale='f'
                  temperature={fahrenheit}
                  onTemperatureChange={this.handleChange}
               />
            </div>
         </div>
      )
   }
}
export default Calculator;