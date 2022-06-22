import { React } from "react";

export const Profile = ({ data }) => {
  return (
    <div className="profile">
      <h4 className="profile-name">
        {data[0]
          ? `Profile: ${data[0].owner.login}`
          : "This username does not exist"}
      </h4>

      <img
        className="profile-image"
        src={data[0] ? data[0].owner.avatar_url : ""}
      ></img>
    </div>
  );
};
