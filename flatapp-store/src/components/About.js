import React from "react";
import { Link } from "react-router-dom"
import { Box, Flex, Heading, Button } from "@chakra-ui/react"
import { TiArrowBack } from "react-icons/ti";

function About() {
  return (
    <Flex justifyContent="center">
      <Box 
      textAlign="center"
      backgroundColor="#00ACEE" 
      marginTop="5%"
      width="800px"
      height="600px"
      borderRadius="5%"
      boxShadow="dark-lg" >
        <Heading padding="2%" size="3xl">Welcome to FlatApp</Heading>
        <Heading padding="2%" size="md">
          FlatApp Store is an e-commerce platform designed to showcase single-page
          apps created by members of Flatiron “Stranger Strings” cohort, as well
          as other Flatiron students.
        </Heading>
        <ul id="text-small">
        <li>
          Browse and search for cool SPAs by up-and-coming developers from
          Flatiron
        </li>
        <li>See detailed view of each app</li>
        <li>
          Developers can upload their projects permanently to the platform using
          our “sellers” page
        </li>
      </ul>

      <h3 id="text-big">Technologies used:</h3>
      <p id="text-small">
        Our frontend was built with React.js and communicates with our
        json-server in our backend{" "}
      </p>
      <br></br>
      <br></br>

      <h3 id="text-big">Goals:</h3>
      <h4 id="text-small">
        Our goal was to build an React application and simulate a professional
        work environment:
      </h4>
      <ul id="text-small">
        <li>plan out your wireframes and features</li>
        <li>pitched our app in a project proposal</li>
        <li>use Github for our version control workflow</li>
        <li>
          create a json-server to create a RESTful API and make both a GET and a
          POST request
        </li>
        <li>utilize Chakra UI for our CSS styling</li>
      </ul>
      <br></br>
      <br></br>

      <h3 id="text-big">Accomplishments:</h3>
      <ul id="text-small">
        <li>
          we were able to create 6 client-side routes using React Router in our
          nav bar/other UI element that allows users to navigate between routes
        </li>
        <li>
          we created use a controlled form to make our POST request to our
          json-server
        </li>
        <li>
          we rendered developers' apps onto our store page using array filter
          method and GET requests from our json-server
        </li>
        <li>
          we organized our code into purposeful components in order to keep it
          clean and dry
        </li>
        <li>we incorporated a UI framework for our styling with Chakra UI</li>
      </ul>
        <Heading size="md">We're glad to have you here!</Heading>
        <Heading marginBottom="2%" size="md">Now, let's get exploring!</Heading>
        <Link to="/"> 
          <Button boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            <TiArrowBack color="#00ACEE"/>
          </Button>
        </Link> 
      </Box>
    </Flex>
  );
}

export default About;
