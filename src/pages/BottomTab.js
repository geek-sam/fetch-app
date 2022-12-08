import React from "react";
import Card from "../components/Card";
import { userService } from "../services";

function BottomTab(props) {
  const { users, setUsers } = props;

  async function fetchUsers() {
    try {
      const data = await userService.getUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   fetchUsers();
  // });

  return (
    <div className="btm-tab">
      <div className="control">
        <button className="fetch-user" onClick={fetchUsers}>
          Fetch Users
        </button>
        <h2>List of Fetched Data</h2>
      </div>
      <div className="card-container">
        <Card users={users} />
      </div>
    </div>
  );
}

export default BottomTab;
