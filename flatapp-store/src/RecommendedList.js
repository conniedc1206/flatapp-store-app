import React from 'react'
import RecommendedItem from './RecommendedItem'

function RecommendedList({ apps }) {
  
    let sortedApps = apps.sort((appA, appB) => {
        return appB.likes - appA.likes;
    })

    console.log(sortedApps)
    
    const renderRecommended = sortedApps.map((app) => {
        return <RecommendedItem key={app.id} apps={apps} />
    })

    return (
    <div>
        {renderRecommended}
    </div>
  )
}

export default RecommendedList
  
  