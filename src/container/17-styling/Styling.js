import React from "react";
import './components/Style.css';
import Inline from "./components/Inline"; //inline stylesheet
import './components/appStyle.css'; //regular stylesheet
import myStyles from './components/appStyle.module.css'; //module stylesheet

function Styling(props) {
   let changeColor = props.myClassOne ? 'myClassOne' : 'myClassTwo'
   return (
      <div>
         <h1 className={changeColor}>Hello, Style. how are you?</h1>
         <h1 className={`${changeColor} fontSize`}>Hello, Style. how are you?</h1>
         <Inline />
         <h1 className="appStyleClass">App Class</h1>
         <h1 className={myStyles.appStyleModuleClass}>App Class Module</h1>
      </div>
   )
}
export default Styling;