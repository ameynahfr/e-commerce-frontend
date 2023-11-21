// MyProfile.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext.js";
import profilePic from "../pages/download.jpeg";

const MyProfile = () => {
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4500/api/role/user/me",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        console.log("User Profile:", response.data.user);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle unauthorized or logout the user
        logout();
        setLoading(false);
      }
    };

    if (user) {
      fetchUserProfile();
    }
  }, [user, logout]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : user ? (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover object-center"
            src={user.image.url || profilePic}
            alt={`${user.firstName} ${user.lastName}`}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600 mt-2">{user.email}</p>
            <p className="text-gray-600 mt-2">Role: {user.role}</p>
          </div>
        </div>
      ) : (
        <p className="text-red-600">Error fetching user data.</p>
      )}
    </div>
  );
};

export default MyProfile;
