import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

class Persons extends React.Component {
  render() {
    const { persons } = this.props;
    return (
      <div>
        <Link to="/form">Form</Link>
        <ul>
          {persons.map((person) => (
            <li key={person._id}>
              <p>{`name: ${person.name}`}</p>
              <p>{`age: ${person.age}`}</p>
              <p>{`status: ${person.status}`}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.persons.persons,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
