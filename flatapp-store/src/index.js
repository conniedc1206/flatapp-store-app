import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";


ReactDOM.render(
  <ChakraProvider>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);