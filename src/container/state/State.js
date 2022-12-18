import React, { Component } from "react";

class State extends Component{
  constructor() {
    super();
    this.state = {
      message: 'Welcome the here'
    }
  }
  messageChange() {
    this.setState({
      message: 'Thanks for comming here'
    })
  }

  render() {
    return (
      <div mb-5>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.messageChange()} className="btn btn-primary">Click Here</button>
      </div>
    )
  }
}

export default State;