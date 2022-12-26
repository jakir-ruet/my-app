import React from "react";
import ListItem from './components/ListItem';

function KeyUseCorrect(props) {
   const numbers = props.numbers;
   const listItems = numbers.map((number) => <ListItem key={number} value={numbers} />)
   return (
      <div>
         <ul>{listItems}</ul>
      </div>
   )
}
export default KeyUseCorrect;