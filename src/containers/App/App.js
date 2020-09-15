import React from "react";
import { connect } from "react-redux";
import { personsFetchData } from "../../redux/actions/persons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Persons from "../Persons";
import Form from "../Form";

class App extends React.Component {
  componentDidMount() {
    const { personsFetchData } = this.props;
    personsFetchData("http://localhost:8080/");
  }

  componentDidUpdate(prevProps) {
    if (this.props.persons !== prevProps.persons) {
      console.log("hello");
    }
  }

  render() {
    // const { persons } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Persons} />
          <Route exact path="/form" component={Form} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.persons.persons,
});

const mapDispatchToProps = { personsFetchData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
