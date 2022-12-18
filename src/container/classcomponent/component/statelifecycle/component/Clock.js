import React, { Component } from "react";

class Clock extends Component{
   // constructor(props) {
   //    super(props);
   //    this.state = {date: new Date()};
   // }
   state = { date: new Date() };

   //applying the life cycle here
   componentDidMount() {
      // setInterval(() => {
      //    this.setState({
      //       date: new Date(),
      //    });
      // }, 1000);

      this.ClockTimer = setInterval(() => this.tick(), 1000)
   }

   componentWillUnmount() {
      clearInterval(this.ClockTimer);
   }

   tick() {
      this.setState({
         date: new Date()
      })
   }

   render() {
      return (
         <div>
            {/* <h2>{new Date().toLocaleTimeString(this.props.locale)}</h2> */}
            <h2>{this.state.date.toLocaleTimeString(this.props.locale)}</h2>
         </div>
      )
   }
}

export default Clock;