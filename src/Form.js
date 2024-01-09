import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <form>
      <input type="text" placeholder="Song Name" name="song-name" />
      <input type="text" placeholder="Artist Name" name="song-name" />
      <button className="submit-button">Submit</button>
    </form>
  );
}