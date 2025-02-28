import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="text-center text-gray-700 mt-6">
        Please login to view your profile.
      </div>
    );

  return (
    <div className="bg-white p-6 mt-6 rounded-lg shadow-md text-center w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800">Welcome, {user.username}!</h2>
      <p className="text-gray-600 mt-2">You are successfully logged in.</p>
    </div>
  );
}

export default Profile;
