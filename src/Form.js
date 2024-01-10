import React from 'react';
import './Form.css';

export default function Form({submitSong, songName, artistName, setSongName, setArtistName}) {
  return (
    <form>
      <input type="text" placeholder="Song Name" value={songName} name="song-name" onChange={event => setSongName(event.target.value)} />
      <input type="text" placeholder="Artist Name" value={artistName} name="artist-name" onChange={event => setArtistName(event.target.value)}/>
      <button className="submit-button" name="submit-button" onClick={event => submitSong(event)}>Submit</button>
    </form>
  );
}