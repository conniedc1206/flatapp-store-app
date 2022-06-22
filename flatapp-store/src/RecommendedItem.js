import React from 'react'

function RecommendedItem({ app }) {
   
    const { name, image, creators, likes, phase } = app;
  
    const handleClick = () => {
        console.log('hello world');
        //this should link to details page of corresponding project
    }

    //iterates through all creators and puts commas between their names
    let authors = "";
    creators.author.forEach((author) => authors += author + ", ")
    authors = authors.slice(0, authors.length-2);

    return (
    <div onClick={handleClick}>
        <img src={image} alt={name} height="20px" width="20px" />
        <strong>{name}</strong>
        <p>By: {authors}</p>
        <p>Phase {phase}</p>
        <p>{likes} likes</p>
    </div>
  )
}

export default RecommendedItem;