import React from "react";
import MyState from "./10-state/MyState";
import Props from './9-props/MyProps';

function Container() {
   return (
      <div className="mt-2">
         <Props />
         <MyState/>
      </div>
   )
}

export default Container;