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

  // function addSong(newSong) {
  //   postSong(newSong)
  //   .then(data => setSongs([...songs, data]))
  //   .catch(error => console.log(error.message))
  // }

  function addSong(newSong) {
    const postSong = () => {
      return fetch("http://localhost:8080/api/v1/playlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: newSong.id,
          songName: newSong.songName,
          artistName: newSong.artistName,
        }),
      }).then((response) => response.json());
    };
    postSong(newSong)
      .then((data) => {
        setSongs([...songs, data]);
        console.log("POST", data);
      })
      .catch((error) => console.log(error.message));  
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

