import './App.css';
import Form from './Form';
import CardContainer from './CardContainer';
import { useState, useEffect } from 'react';
import {getPlaylist} from './apiCalls';

export default function App() {
  const [songs, setSongs] = useState([]);
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [error, setError] = useState("")
  
  function submitSong(event) {
    event.preventDefault()

    const newSong = {
      id: songs.length + 1,
      songName,
      artistName
    }
    if (songName && artistName) {
      addSong(newSong)
      clearInput();
    }
  }

  useEffect(() => {
    fetchPlaylist()
  }, [])

  const fetchPlaylist = () => {
    getPlaylist()
    .then((data) => {
      setSongs(data)
      console.log(data)
    })
    .catch((error) => {
      setError(error.message)
    })
  }

  function addSong(newSong) {
    setSongs([...songs, newSong])
  }

  function clearInput() {
    setSongName("")
    setArtistName("")
  }

  function deleteCard(id) {
    const filteredSongs = songs.filter(song => song.id !== id)
    setSongs(filteredSongs)
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
      <CardContainer
        songs={songs}
        deleteCard={deleteCard}
      />
    </main>
  );
}

