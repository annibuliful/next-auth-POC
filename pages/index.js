import React, { useState } from "react";
import { useAuth } from "../contexts/auth";

export default function Home() {
  /**
   *
   * If you never heard about Context API please visit https://reactjs.org/docs/context.html
   * Fell free to ask me via P'pin
   * Thank you.
   *
   */

  const { login, logout } = useAuth();

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <div>
      {/* <input
        value={username}
        placeholder={"username"}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        value={password}
        placeholder={"Password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /> */}
      <button onClick={() => login({ username, password })}>Login</button>
      <button onClick={(e) => logout()}>logout</button>
    </div>
  );
}
