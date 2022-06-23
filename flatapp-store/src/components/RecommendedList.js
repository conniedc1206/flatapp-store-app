import React from 'react'
import AppItem from './AppItem';
import { Flex } from "@chakra-ui/react"

function RecommendedList({ apps, search, handleSelectedApp }) {
  
    let renderRecommended = [];
    const sortedApps = apps.sort((appA, appB) => {
        return appB.likes - appA.likes;
    })

    if (search === ""){
        const truncatedApps = sortedApps.slice(0, 5)
        renderRecommended = truncatedApps.map(app => {
            return <AppItem key={app.id} app={app} handleSelectedApp={handleSelectedApp}/>
        })
    }
    else {
        const matchingApps = sortedApps.filter(app => {
           return app.appName.toLowerCase().includes(search.toLowerCase())
        })
        console.log(matchingApps)
        renderRecommended = matchingApps.map(app => {
            return <AppItem key={app.id} app={app}  handleSelectedApp={handleSelectedApp}/>
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
  
  