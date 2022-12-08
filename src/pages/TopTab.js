import React, { useState, useEffect } from "react";
// import Card from "../components/Card";
import { userService } from "../services";

function TopTab() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      setUser(await userService.getUser(userId));
      // console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(user);

  return (
    <div className="top-tab">
      {/* <h3>Enter an user Id</h3> */}
      <div>
        <input
          type="text"
          name="user"
          id="user"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <button className="fetch-user" onClick={fetchUser}>
          Fetch User
        </button>
      </div>
      <br />
      {userId != 0 ? (
        <div className="card">
          <img className="image" src={user.data.avatar} alt="avatar" />
          <div className="details">
            <h2 className="name">{user.data.first_name + user.last_name}</h2>
            <h4 className="mail">{user.data.email}</h4>
          </div>
        </div>
      ) : (
        <h2>Enter an user Id</h2>
      )}
    </div>
  );
}

export default TopTab;
