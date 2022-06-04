import React, { Component } from "react";
import HOCs from "./HOCs";

class LikeCount extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.countNumber}</h1>
        <button onClick={this.props.countHandler}>Likes 👍</button>
      </div>
    );
  }
}
const EnhancsLikes = HOCs(LikeCount);
export default EnhancsLikes;
