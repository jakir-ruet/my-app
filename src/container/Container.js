import React from "react";
import MyState from "./10-state/MyState";
import MySetState from "./11-setstate/MySetState";
import ClassComponent from "./12-eventhandler/ClassComponent";
import FuncComponent from "./12-eventhandler/FuncComponent";
import Props from './9-props/MyProps';
import EventBind from './13-eventbind/EventBind';
import ParentComponent from './14-metsasprops/ParentComponent';
import ConditionalRendering from './15-condrendering/ConditionalRendering';
import ListRendering from "./16-listrendering/ListReandering";
import ListKeyRendering from './16-listrendering/ListKeyRendering';
import KeyUses from "./16-listrendering/KeyUses";
import KeyUseCorrect from './16-listrendering/components/ListItem'
import Styling from "./17-styling/Styling";
import Form from './18-form/Form';
import Lifting from "./19-lifting/Lifting";
import Calculator from './19-lifting/component/Calculator';

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
         {/* <ConditionalRendering /> */}
         {/* <ListRendering/> */}
         {/* <ListKeyRendering/> */}
         {/* <KeyUses/> */}
         {/* <KeyUseCorrect/> */}
         {/* <Styling myClassOne={true} /> */}
         {/* <Form/> */}
         <Calculator/>
      </div>
   )
}

export default Container;