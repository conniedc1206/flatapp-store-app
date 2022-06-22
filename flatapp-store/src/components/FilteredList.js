import React from 'react'
import ProjectItem from './ProjectItem'
import { Box, Flex } from "@chakra-ui/react"

function FilteredList({ apps, phase }) {

  const filteredApps = apps.filter(app => app.phase === phase);

  const renderApps = filteredApps.map(app => {
    return <ProjectItem key={app.id} app={app} />
  })
  
  return (
    <Flex
    justifyContent="center"
    width="75%"
    margin="auto" 
    marginTop="2%"
    borderWidth="1px"
    borderRadius="md"
    padding="10px"
    paddingBottom="10px"
    flexWrap="wrap" 
    height="300px"
    overflowY="scroll" >
      {renderApps}
    </Flex>
  )
}

export default FilteredList