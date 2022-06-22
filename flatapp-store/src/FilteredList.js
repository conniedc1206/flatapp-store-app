import React from 'react'
import ProjectItem from './ProjectItem'
import { Box, Flex } from "@chakra-ui/react"

function FilteredList({ apps, phase }) {

  //pick out the integer from phase state
  const phaseNum = parseInt(phase.charAt(1))

  const filteredApps = apps.filter(app => app.phase === phaseNum);

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