import React from "react";

function Card(props) {
  const { users } = props;
  // console.log(users);
  return (
    users &&
    users.data.map((user, id) => {
      return (
        <div className="card" key={id}>
          <img className="image" src={user.avatar} alt="avatar" />
          <div className="details">
            <h2 className="name">{user.first_name + user.last_name}</h2>
            <h4 className="mail">{user.email}</h4>
          </div>
        </div>
      );
    })
  );
}

export default Card;
