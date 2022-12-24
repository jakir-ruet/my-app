import { Component } from "react";

class LifeCycleA extends Component{
   constructor(props) {
      super(props)
      this.state = ({
         title: 'React JS Training'
      })
      console.log('LifecycleA Contructor')
   }
   static getDerivedStateFromProps(props, state) {
      console.log('LifecycleA, getDerivedStateFromProps')
      return null
   }
   componentDidMount() {
      console.log('LifecycleA, componentDidMount')
   }
   render() {
      console.log('LifecycleA, render')
      return (
         <div className="card m-2">
            <div className="card-body">
               <p>LifecycleA</p>
            </div>
         </div>
      )
   }
}

export default LifeCycleA;