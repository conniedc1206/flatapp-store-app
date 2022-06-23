import React, { useEffect, useState } from "react";
import RecommendedList from "./RecommendedList";
import FilteredList from "./FilteredList";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import { Box } from "@chakra-ui/react";

function MainContainer({ apps, setApps, handleSelectedApp }) {
  const [phase, setPhase] = useState("1");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/apps")
      .then((r) => r.json())
      .then(setApps);
  }, []);

  return (
    <Box textAlign="center" >
      <SearchBar setSearch={setSearch} search={search} />
      <h2>Recommended Apps</h2>
      <RecommendedList
        apps={apps}
        search={search}
        handleSelectedApp={handleSelectedApp}
      />
      <FilterBar setPhase={setPhase} />
      <FilteredList
        apps={apps}
        phase={phase}
        handleSelectedApp={handleSelectedApp}
      />
    </Box>
  );
}

export default MainContainer;
