import React from "react";
import { connect } from "react-redux";
import { personsFetchData } from "../../redux/actions/persons";

class App extends React.Component {
  componentDidMount() {
    // const { personsFetchData, persons } = this.props;
    fetch("http://localhost:8080/").then((res) => console.log(res));
  }

  render() {
    return <div>Hello</div>;
  }
}

const mapStateToProps = (state) => ({
  persons: state.persons.persons,
});

const mapDispatchToProps = { personsFetchData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
