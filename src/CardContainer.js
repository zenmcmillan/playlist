import React from "react";
import './CardContainer.css';
import Card from "./Card";

export default function CardContainer({songs}) {
   const songCards = songs.map(song => {
    
    return (
     <Card 
     songName={song.songName} 
     artistName={song.artistName} 
     id={song.id}
     key={song.id}
     />
    )
   })

  return (
    <div className='songs-container'>{songCards}</div>
  )
}