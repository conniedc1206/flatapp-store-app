import React from 'react'

function RecommendedItem(apps) {
  
    const {name, image, author, likes, phase} = apps;
  
    function handleClick() {
        console.log('hello world');
    }

    return (
    <div onClick={handleClick}>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>By: {author}</p>
        <p>Phase {phase}</p>
        <p>{likes} likes</p>
    </div>
  )
}

export default RecommendedItem;