import React from "react";
import CustomCard from "./component/CustomCard";
import CustomCardClassCom from "./component/CustomCardClassCom";

function CustomcComponent() {
   return (
      <div>
         <CustomCard name='I am React JS' des='I am the best library' />
         <CustomCardClassCom name='I am React JS from class component' des='I am the best library' />
      </div>
   )
}

export default CustomcComponent;