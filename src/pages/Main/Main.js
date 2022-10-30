import React from "react";
import Nav from "./nav/Nav";
import "./main.scss";
import Feed from "./feed/Feed";
import AccountAndRecommend from "./accountAndRecommend/AccountAndRecommend";

const Main = () => {
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
