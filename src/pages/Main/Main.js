import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import "./main.scss";
import Feed from "./feed/Feed";
import AccountAndRecommend from "./accountAndRecommend/AccountAndRecommend";

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch("/data/sample.json")
      .then(response => response.json())
      .then(data => setFeedList(data));
  });
  return (
    <div className="main">
      <Nav />
      <main>
        <section className="globalContainer">
          <Feed />
          <AccountAndRecommend />
        </section>
      </main>
    </div>
  );
};

export default Main;
