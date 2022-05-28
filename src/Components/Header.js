import React from 'react'
import '../App.css';

export default function Header() {
  return (
    <header className="head">
      <center>
      <h1>Digital Library</h1>
      <p>Search your Book here</p>
      <input type="text" name="search" id="search" />
      </center>
    </header>
  )
}
