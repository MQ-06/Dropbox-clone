import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = (userData) => {
    if (userData.firstName && userData.lastName) {
      const initials =
        userData.firstName[0].toUpperCase() +
        userData.lastName[0].toUpperCase();

      // Assuming userData includes a profilePictureURL from Google
      const profilePictureURL = userData.profilePicture || null;

      setUser({ ...userData, initials, profilePicture: profilePictureURL });
    } else {
      console.error("Invalid user data");
    }
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
