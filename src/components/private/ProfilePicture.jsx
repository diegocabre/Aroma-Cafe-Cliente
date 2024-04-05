import React from "react";

function ProfilePicture({ imageUrl, alt }) {
  return (
    <div className="profile-picture">
      <img src={imageUrl} alt={alt} />
    </div>
  );
}

export default ProfilePicture;
