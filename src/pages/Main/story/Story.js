import React from "react";
import Profile from "./profile/Profile";
import "./story.scss";

const Story = () => {
  return (
    <div className="story">
      <div className="storyContainer">
        <ul className="storyWrapper">
          <Profile />
        </ul>
      </div>
    </div>
  );
};

export default Story;
