import React from "react";
import { useState } from "react";
import { Button, Box, Flex } from "@chakra-ui/react"

function Login() {
  const [log, setLog] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLog.reset();
  };

  return (
    <div className="login">
      <form>
        <h1>Login</h1>
        <label htmlFor="name">UserName</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setLog(e.target.value)}
          value={log}
        />
        <br></br>
        <br></br>
        <label htmlFor="user-password">Password</label>
        <input
          type="password"
          id="user-password"
          name="user-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br></br>
        <br></br>
        {/* <label htmlFor="name">Newsletter</label>
                <input type="checkbox" id="newsletter" value="newsletter"/> */}
        <Button id="submit" 
        type="submit"
        colorScheme="twitter" >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
