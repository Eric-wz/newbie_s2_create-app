import React from "react";

function UserProfile() {
  const user = {
    name: "Eric",
    age: 41,
    location: "NewZealand",
  };

  return (
    <div>
      <h2>{user.location}</h2>
    </div>
  );
}

export default UserProfile;
