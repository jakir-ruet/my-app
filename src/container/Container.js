import React from "react";
import MyState from "./10-state/MyState";
import MySetState from "./11-setstate/MySetState";
import ClassComponent from "./12-eventhandler/ClassComponent";
import FuncComponent from "./12-eventhandler/FuncComponent";
import Props from './9-props/MyProps';
import EventBind from './13-eventbind/EventBind';
import ParentComponent from './14-metsasprops/ParentComponent';
import ConditionalRendering from './15-condrendering/ConditionalRendering';

function Container() {
   return (
      <div className="mt-2">
         {/* <Props /> */}
         {/* <MyState /> */}
         {/* <MySetState /> */}
         {/* <FuncComponent /> */}
         {/* <ClassComponent /> */}
         {/* <EventBind/> */}
         {/* <ParentComponent /> */}
         <ConditionalRendering />
      </div>
   )
}

export default Container;