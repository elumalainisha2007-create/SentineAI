import React from "react";

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-details">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Status:</strong> {user.isActive ? "Active" : "Inactive"}</p>
      </div>
    </div>
  );
}

export default UserProfile;