import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Box, Flex, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react"

function Login() {
  const [log, setLog] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    setPassword("")
    setLog("")
  };

  return (
    <Flex justifyContent="center" >
      <Box marginTop="5%"
      border="1px solid lightgrey"
      borderRadius="10%"
      padding="5%"
      bgColor="white" >
        <FormControl>
          <Heading
          size="sm"
          marginBottom="10%" >
            Login
          </Heading>
          <FormLabel htmlFor="name" >UserName</FormLabel>
          <Input
            type="text"
            id="name"
            onChange={e => setLog(e.target.value)}
            value={log}
            marginBottom="1%"
          />
          <FormLabel htmlFor="user-password" >Password</FormLabel>
          <Input
            type="password"
            id="user-password"
            name="user-password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            marginBottom="10%"
          />
          <Flex justifyContent="center" >
            {/* <Link to="/" > */}
              <Button id="submit" 
              colorScheme="twitter" 
              width="75%"
              onClick={handleSubmit} >
                Login
              </Button>
            {/* </Link> */}
          </Flex>
        </FormControl>
      </Box>
    </Flex>
  );
}

export default Login;
