import React, { Component } from "react";

class Form extends Component{
   state = {
      title: 'JavaScript',
      language: 'Select',
      textareaText: 'Type your message here',
      isCheckedTrue: true

   };

   changeHandler = (e) => {
      console.log(e.target.value);
      if (e.target.type === 'text') {
         this.setState({
            title: e.target.value
         })
      }
      else if(e.target.type === 'select-one'){
         this.setState({
            language: e.target.value
         })
      }
      else if (e.target.type === 'textarea') {
         this.setState({
            textareaText: e.target.value
         })
      }
      else if (e.target.type === 'checkbox') {
         this.setState({
            isCheckedTrue: e.target.checked
         })
      }
      else {
         console.log('Nothing to do')
      }
   };
   submitHandler = (e) => {
      const { title, language, textareaText, isCheckedTrue } = this.state;
      e.preventDefault(); //due to disable the page reload
      alert(`${title} ${language} ${textareaText} ${isCheckedTrue}`)
      console.log(title, language, textareaText, isCheckedTrue)
   }

   render() {
      const { title, language, textareaText, isCheckedTrue } = this.state;
      return (
         <div className="card m-2">
            <div className="card-body">
                {/*this is uncontrolled form*/}
               {/* <form> 
                  <div className="form-group">
                     <input type="text" value='JavaScript' className="form-control" placeholder="Enter the title"/>
                  </div>
               </form> */}

               <form onSubmit={this.submitHandler}>
                  <div className="form-group">
                     <input
                        type="text"
                        value={title}
                        className="form-control"
                        placeholder="Enter the title"
                        onChange={this.changeHandler}
                     />
                  </div>
                  <div className="form-group mt-2">
                     <select value={language} onChange={this.changeHandler} className="form-control">
                        <option value="select">Select</option>
                        <option value="react">React JS</option>
                        <option value="angular">Angular JS</option>
                     </select>
                  </div>
                  <div className="form-group mt-2">
                     <textarea
                        type="text"
                        value={textareaText}
                        className="form-control"
                        rows="2"
                        placeholder="Type your message"
                        onChange={this.changeHandler}
                     ></textarea>
                  </div>
                  <div className="form-group mt-2">
                     <div className="form-check">
                        <input
                           type="checkbox"
                           checked={isCheckedTrue}
                           className="form-check-input"
                           onChange={this.changeHandler}
                        />
                        <label className="form-check-label">Are you Agree</label>
                     </div>
                  </div>
                  <div className="form-group mt-2">
                     <input
                        type="submit"
                        value='Submit'
                        className="btn btn-danger"
                     />
                  </div>
               </form>
            </div>
         </div>
      )
   }
}
export default Form;