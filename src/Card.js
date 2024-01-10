import React from "react";
import './Card.css';

export default function Card({songName, artistName, id, deleteCard}) {
  return (
    <div className="card">
      <h3>{songName}</h3>
      <p>{artistName}</p>
      <button className="delete-button" onClick={() => deleteCard(id)}>🗑️</button>
    </div>
  );
}