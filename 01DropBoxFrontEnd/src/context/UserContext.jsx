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
    if (userData.firstName && userData.lastName) {
      const initials =
        userData.firstName[0].toUpperCase() +
        userData.lastName[0].toUpperCase();

      const profilePictureURL = userData.profilePicture || null;

      const updatedUser = {
        ...userData,
        initials,
        profilePicture: profilePictureURL,
      };
      setUser(updatedUser);

      localStorage.setItem("user", JSON.stringify(updatedUser));
    } else {
      console.error("Invalid user data");
    }
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
