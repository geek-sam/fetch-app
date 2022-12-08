import React from "react";

function form(props) {
  const { children, userData, setUserData, checkSignIn, checkSignUp } = props;

  return (
    <div className="form-container">
      {children}
      <div className="form">
        <label htmlFor="email">E-mail</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your mail id"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Enter password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <br /> <br />
        <button className="btn" onClick={checkSignIn}>
          Sign In
        </button>
        <button className="btn" onClick={checkSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default form;
