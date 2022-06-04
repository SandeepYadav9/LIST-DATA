import React, { Component } from "react";

const HOCs = (Component, data) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counts: 0,
      };
    }
    onClickHandler = () => {
      this.setState({
        counts: this.state.counts + 1,
      });
    };
    render() {
      return (
        <div>
          <Component
            countNumber={this.state.counts}
            countHandler={this.onClickHandler}
          />
        </div>
      );
    }
  };
};
export default HOCs;
