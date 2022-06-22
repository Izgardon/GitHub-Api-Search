import React from "react";

export const Profile = ({ data }) => {
  console.log(data);
  return (
    <div className="profile">
      <h4 className="profile-name">Profile: {data[0].owner.login}</h4>

      <img className="profile-image" src={data[0].owner.avatar_url}></img>
    </div>
  );
};
