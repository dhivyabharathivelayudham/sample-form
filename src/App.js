import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    return (
      <span>
        {/* looping through all states and displaying it */}
        {Object.keys(this.props.data).map((key, index) => (
          <p key={index}>
            {key}: {this.props.data[key]}
          </p>
        ))}
      </span>
    );
  }
}

//for validation
App.propTypes = {
  data: PropTypes.object
};

export default App;
