import React, { useState, useEffect, createContext, useContext } from "react";

/**
 *
 *  I recommend to use this lib to store JWT token to cookie because nextjs
 *  cannot access local storage which is provided by client side(window API).
 *
 */
import cookie from "js-cookie";

/**
 *
 *  If you never heard about Context API please visit https://reactjs.org/docs/context.html
 *  It's familiar redux but it's not be the same because Redux is the single sour of truth
 *  But Context API is used for reduce the compexity between parent and child prop
 *  It means that in this case parent component doesn't need to pass event handler and any property to chilren componet
 *  Moreover, children components can call function from Context Provider directly instead of passing props
 *
 */

const AuthContext = createContext({});

// const API_URL = "http://localhost:3000";
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticate] = useState(false);

  useEffect(() => {
    const token = cookie.get("token");
    if (token) {
      setAuthenticate(true);
    }
  }, []);

  const login = async ({ username, password }) => {
    // const result = await fetch(`${API_URL}/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username, password }),
    // });
    // const response = await result.json();
    setAuthenticate(true);
    cookie.set("token", "JWT token");
  };

  const logout = async () => {
    // const result = await fetch(`${API_URL}/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username, password }),
    // });
    // const response = await result.json();
    setAuthenticate(false);
    cookie.remove("token");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: isAuthenticated, login, logout }}
    >
      <p>{isAuthenticated ? "Loged" : ""}</p>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
