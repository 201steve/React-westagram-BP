import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="container">
      <main className="loginContainer">
        <h1 className="title">Westagram</h1>
        <form className="loginForm">
          <input
            className="userId"
            name="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="userPassword"
            name="userPassword"
            type="password"
            placeholder="비밀번호"
          />
          <button className="loginButton" type="button" disabled>
            로그인
          </button>
        </form>
        <a className="findPassword" href="/">
          비밀번호를 잊으셨나요?
        </a>
      </main>
    </div>
  );
};

export default Login;
