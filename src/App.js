import './App.css';
import Form from './Form';
import CardContainer from './CardContainer';
import { useState } from 'react';

export default function App() {
  const [songs, setSongs] = useState([]);
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");

  function submitSong(event) {
    event.preventDefault()

    const newSong = {
      id: Date.now(),
      songName,
      artistName
    }
    if (songName && artistName) {
      addSong(newSong)
      clearInput();
    }
  }

  function addSong(newSong) {
    setSongs([...songs, newSong])
  }

  function clearInput() {
    setSongName("")
    setArtistName("")
  }

  return (
    <main className="App">
      <h1>Playlist</h1>
      <Form
        songs={songs}
        setSongs={setSongs}
        songName={songName}
        setSongName={setSongName}
        artistName={artistName}
        setArtistName={setArtistName}
        submitSong={submitSong}
      />
      <CardContainer songs={songs} />
    </main>
  );
}

