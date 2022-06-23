import React from "react";
import { useState } from "react";
import { Button, Box, Flex, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react"

function Login() {
  const [log, setLog] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLog.reset();
  };

  return (
    <Flex justifyContent="center">
      <Box marginTop="5%"
      border="1px solid lightgrey"
      borderRadius="10%"
      padding="5%"
      bgColor="white">
        <FormControl>
          <Heading size="sm">Login</Heading>
          <FormLabel htmlFor="name">UserName</FormLabel>
          <Input
            type="text"
            id="name"
            onChange={(e) => setLog(e.target.value)}
            value={log}
          />
          <br></br>
          <br></br>
          <FormLabel htmlFor="user-password">Password</FormLabel>
          <Input
            type="password"
            id="user-password"
            name="user-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br></br>
          <br></br>
          <Flex justifyContent="center">
            <Button id="submit" 
            type="submit"
            colorScheme="twitter" 
            width="75%"
            onSubmit={handleSubmit}>
              Login
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </Flex>
  );
}

export default Login;
