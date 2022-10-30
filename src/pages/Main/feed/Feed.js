import React from "react";
import Story from "../story/Story";
import "./feed.scss";

const Feed = () => {
  return (
    <div className="storyAndFeed">
      <Story />
      <div className="feedContainer">
        <div className="profileWrapper">
          <img
            className="userProfileImage"
            alt="profile"
            src="/images/profile.png"
          />
          <span className="userAccount">account</span>
        </div>
        <div className="feedImageWrapper">
          <img
            className="feedImage"
            src="/images/architecture1.jpg"
            alt="feed"
          />
        </div>
        <div className="responseWrapper">
          <div className="feedResponse">
            <i className="fa-regular fa-heart" />
            <i className="fa-regular fa-comment" />
            <i className="fa-regular fa-paper-plane" />
            <i className="fa-regular fa-bookmark" />
          </div>
          <div className="likeCounter">{`좋아요 ${"00"}개`}</div>
          <div className="replyWrapper">
            <p className="reply">
              {`${"account"} ${"lorem*100"}`}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining
            </p>
            <i className="fa-regular fa-heart" />
          </div>
        </div>
        <div className="commentWrapper">
          <form className="commentForm">
            <input className="comment" placeholder="댓글 달기..." />
            <button className="submitButton">게시</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feed;
