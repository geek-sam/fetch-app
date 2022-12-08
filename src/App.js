import React, { useState } from "react";
import LeftTab from "./pages/LeftTab";
import TopTab from "./pages/TopTab";
import BottomTab from "./pages/BottomTab";
import "./App.css";

function App() {
  const [users, setUsers] = useState({ data: [] });

  return (
    <div className="main-container">
      <LeftTab />
      <div className="right-tab">
        <TopTab users={users} setUsers={setUsers} />
        <BottomTab users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}

export default App;
