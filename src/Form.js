import React, { Component } from "react";
import App from "./App";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: "",
        emailid: "",
        mobileno: "",
        gender: "",
        cardtype: ""
      },
      check: false,
      displayData: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitUser = this.submitUser.bind(this);
    this.setCheck = this.setCheck.bind(this);
  }
  handleChange(event) {
    //destructuring object properties
    const { name, value } = event.target;

    this.setState(prevState => ({
      ...prevState,
      formData: { ...prevState.formData, [name]: value },
      displayData: false
    }));
  }

  submitUser(event) {
    event.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      displayData: !this.state.displayData
    }));
  }

  setCheck(event) {
    this.setState(prevState => ({
      ...prevState,
      check: !this.state.check
    }));
  }

  render() {
    return (
      <div>
        <form>
          <h3>Card Registration Form</h3>
          <label>Name :</label>
          <input
            type="text"
            name="username"
            value={this.state.formData.username}
            onChange={this.handleChange}
          />
          <br />
          <label>Email ID :</label>
          <input
            type="text"
            name="emailid"
            value={this.state.formData.emailid}
            onChange={this.handleChange}
          />
          <br />
          <label>Mobile Number :</label>
          <input
            type="text"
            name="mobileno"
            value={this.state.formData.mobileno}
            onChange={this.handleChange}
          />
          <br />
          <label>Gender :</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.formData.gender === "Male"}
            onChange={this.handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.formData.gender === "Female"}
            onChange={this.handleChange}
          />
          Female
          <br />
          <label>Cardtype :</label>
          <select
            name="cardtype"
            value={this.state.formData.cardtype}
            onChange={this.handleChange}
          >
            <option />
            <option value="Mastercard">Mastercard</option>
            <option value="Visa">Visa</option>
            <option value="Rupay">Rupay</option>
            <option value="Maestro">Maestro</option>
          </select>
          <br />
          <input
            type="checkbox"
            checked={this.state.formData.check}
            onChange={this.setCheck}
          />
          Check me out
          <br />
          <button onClick={this.submitUser}>submit</button>
        </form>
        {/* if displayData is true then pass this.state to App component */}
        {this.state.displayData && <App data={this.state.formData} />}
      </div>
    );
  }
}
export default Form;
