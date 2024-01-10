import React from "react";
import './CardContainer.css';
import Card from "./Card";

export default function CardContainer({songs, deleteCard}) {
   const songCards = songs.map(song => {
    
    return (
     <Card 
     songName={song.songName} 
     artistName={song.artistName} 
     id={song.id}
     key={song.id}
     deleteCard={deleteCard}
     />
    )
   })

  return (
    <div className='songs-container'>{songCards}</div>
  )
}