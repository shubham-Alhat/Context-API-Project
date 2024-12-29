import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("dark");

  const value = {
    username,
    setUsername,
    password,
    setPassword,
    theme,
    setTheme,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;

export function useUserContext() {
  return useContext(UserContext);
}
