import React from "react";
import { Box, Flex } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

function ItemDetails({ app }) {

  const { id } = useParams();

  console.log(app);
  return (
    <div>
      <div key={app.id}>
        
        <div>
          <img alt={app.appName} src={app.image} style={{ width: "50%" }} />
        </div>

        <div>
          <h1>{app.appName}</h1>
          <p>Developers: {app.developerNames}</p>
          <p>About: {app.about}</p>
          
          <a href={app.githubRepo}>Github Repo</a>
          <br></br>
          <a href={app.appUrl}>Live Demo</a>
        </div>

        <div>
          <span>
            <button>Add To Cart</button>
            <br></br>
            <button>Go Back</button>
          </span>
        </div>

      </div>
    </div>
  );
}

export default ItemDetails;