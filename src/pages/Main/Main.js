import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import "./main.scss";
import Feed from "./feed/Feed";
import AccountAndRecommend from "./accountAndRecommend/AccountAndRecommend";
import Story from "./story/Story";

const Main = () => {
  const [feedList, setFeedList] = useState([]);
  console.log(feedList);
  useEffect(() => {
    fetch("/data/sample.json")
      .then(response => response.json())
      .then(data => setFeedList(data));
  }, []);
  return (
    <div className="main">
      <Nav />
      <main>
        <section className="globalContainer">
          <div>
            <Story />
            {feedList.map(({ id, account, mockReply, src }) => {
              return (
                <Feed
                  key={id}
                  account={account}
                  mockReply={mockReply}
                  src={src}
                />
              );
            })}
          </div>
          <AccountAndRecommend />
        </section>
      </main>
    </div>
  );
};

export default Main;
