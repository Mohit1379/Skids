import React from "react";
import UserShow from "./UserShow";

export default function UserList({ users, onDelete, onEdit }) {
  const renderedUsers = users.map((user, index) => {
    return <UserShow user={user} onDelete={onDelete} key={index} onEdit={onEdit} />;
  });

  return (
    <div className="container">
      <div className="row">
          <div className="d-flex flex-wrap mx-5">
            {renderedUsers}
          </div>
        </div>
      </div>
  );
}
