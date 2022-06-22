import React from 'react'
import RecommendedItem from './RecommendedItem'

function RecommendedList({ apps }) {
  
    let sortedApps = apps.sort((appA, appB) => {
        return appB.likes - appA.likes;
    })
    
    
    const renderRecommended = sortedApps.map((app) => {
        return <RecommendedItem key={app.id} app={app} />
    })

    return (
    <div>
        {/*eventually these need to render left to right*/}
        {renderRecommended}
    </div>
  )
}

export default RecommendedList
  
  