import React from "react";
import MyState from "./10-state/MyState";
import MySetState from "./11-setstate/MySetState";
import FuncComponent from "./12-eventhandler/FuncComponent";
import Props from './9-props/MyProps';

function Container() {
   return (
      <div className="mt-2">
         <Props />
         <MyState />
         <MySetState />
         <FuncComponent />
         
      </div>
   )
}

export default Container;