import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const loginUser = (userData) => {
    console.log("User Data:", userData);

    const firstName = userData.firstName || "Guest";
    const lastName = userData.lastName || "";

    const initials =
      (firstName[0]?.toUpperCase() || "") + (lastName[0]?.toUpperCase() || "");

    const profilePictureURL = userData.profilePicture || null;

    const updatedUser = {
      ...userData,
      firstName,
      lastName,
      initials,
      profilePicture: profilePictureURL,
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
