import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { personsPostData, personsFetchData } from "../redux/actions/persons";

class Form extends React.Component {
  state = {
    name: "",
    age: "",
    status: "",
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.personsPostData("http://localhost:8080/", this.state);
  };

  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <div className="form-container">
          <form className="form" onSubmit={this.onSubmit}>
            <label className="form-input">
              <input type="text" name="name" onChange={this.onChange}></input>
              name
            </label>
            <label className="form-input">
              <input type="number" name="age" onChange={this.onChange}></input>
              age
            </label>
            <label className="form-input">
              <input type="text" name="status" onChange={this.onChange}></input>
              status
            </label>
            <button className="form-btn">Add mugger</button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.persons.persons,
});

const mapDispatchToProps = { personsPostData, personsFetchData };

export default connect(mapStateToProps, mapDispatchToProps)(Form);
