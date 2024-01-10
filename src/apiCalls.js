import newSong from './App.js'

export const getPlaylist = () => {
  return fetch("http://localhost:8080/api/v1/playlist").then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.status}`);
    } else {
      return response.json();
    }
  });
}



