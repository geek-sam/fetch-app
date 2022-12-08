import React, { useState } from "react";
import Form from "../components/Form";
import { authService } from "../services";

function LeftTab() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [userData, setUserData] = useState({ email: "", password: "" });

  async function checkSignUp() {
    try {
      const details = await authService.signUp(
        userData.email,
        userData.password
      );
      console.log(details);
    } catch (error) {
      console.log(error);
    }
  }
  async function checkSignIn() {
    try {
      const data = await authService.signIn(userData.email, userData.password);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="left-tab">
      <Form
        // email={email}
        // password={password}
        // setEmail={setEmail}
        // setPassword={setPassword}
        userData={userData}
        setUserData={setUserData}
        checkSignUp={checkSignUp}
        checkSignIn={checkSignIn}
      >
        <h1>Sign Up</h1>
      </Form>
    </div>
  );
}

export default LeftTab;
