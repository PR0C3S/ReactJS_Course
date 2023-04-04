import React, { Component } from "react";
import PropTypes from "prop-types";

class Gretting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 23,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h2>Age: {this.state.age}</h2>
        <div>
          <button onClick={this.birthday}> Turn years</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
}

Gretting.propTypes = {
  name: PropTypes.string,
};

export default Gretting;
