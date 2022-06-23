import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { TiArrowBack } from "react-icons/ti";

function ItemDetails({ selectedApp }) {
  // const { id } = useParams();

  //console.log(selectedApp);

  return (
    <div>
      <div key={selectedApp.id}>
        <div>
          <img
            alt={selectedApp.appName}
            src={selectedApp.image}
            style={{ width: "50%" }}
          />
        </div>

        <div>
          <h1>{selectedApp.appName}</h1>
          <p>Developers: {selectedApp.developerNames}</p>
          <p>About: {selectedApp.about}</p>

          <a href={selectedApp.githubRepo}>Github Repo</a>
          <br></br>
          <a href={selectedApp.appUrl}>Live Demo</a>
        </div>

        <div>
          <span>
            <Link to="/">
              <button>
                <TiArrowBack />
              </button>
            </Link>
            <br></br>
            <button>
              <BsCartPlus />
            </button>
            <br></br>
            <button>
              <FaRegThumbsUp />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
