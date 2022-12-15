import React from "react";
import CustomCard from "./component/CustomCard";
import Data from './component/Data.json'

function MyMapping() {
   console.log(Data[0].name);
   console.log(Data[0].addres)
   return (
      <div>
         <CustomCard nameText={Data[0].name} addressText={Data[0].address} />
         <CustomCard nameText={Data[1].name} addressText={Data[1].address} />
         <CustomCard nameText={Data[2].name} addressText={Data[2].address} />
      </div>
   )
}
export default MyMapping;
