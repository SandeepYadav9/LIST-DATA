import React from "react";
import EnhancsComments from "./HOC/CommitCount";

import EnhancsLikes from "./HOC/LikeCount";

const Count = () => {
  return (
    <div>
      <h1>Higher Order Componnets</h1>
      <EnhancsLikes />
      <EnhancsComments />
    </div>
  );
};

export default Count;
