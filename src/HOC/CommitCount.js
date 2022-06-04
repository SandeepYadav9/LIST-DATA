import React, { Component } from "react";
import HOCs from "./HOCs";

 class CommitCount extends Component {
 
  render() {
    return (
        <div>
        <h1>{this.props.countNumber}</h1>
        <button onClick={this.props.countHandler}>Comments ✉</button>
      </div>
    );
  }
}
const EnhancsComments = HOCs(CommitCount);
export default EnhancsComments;