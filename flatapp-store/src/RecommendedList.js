import React from 'react'
import ProjectItem from './ProjectItem';
import { Flex } from "@chakra-ui/react"

function RecommendedList({ apps, search }) {
  
    let renderRecommended = [];
    const sortedApps = apps.sort((appA, appB) => {
        return appB.likes - appA.likes;
    })

    if (search === ""){
        const truncatedApps = sortedApps.slice(0, 5)
        renderRecommended = truncatedApps.map(app => {
            return <ProjectItem key={app.id} app={app} />
        })
    }
    else {
        const matchingApps = sortedApps.filter(app => {
           return app.appName.toLowerCase().includes(search.toLowerCase())
        })
        console.log(matchingApps)
        renderRecommended = matchingApps.map(app => {
            return <ProjectItem key={app.id} app={app} />
        })
    }


    return (
    <Flex
    width="75%"
    margin="auto" 
    marginTop="0.5%" 
    borderWidth="1px"
    borderRadius="md"
    padding="10px" 
    height="200px">
        {renderRecommended}
    </Flex>
  )
}

export default RecommendedList
  
  