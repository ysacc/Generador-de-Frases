import React, { useEffect, useState } from 'react'
import './App.css'

const url="https://type.fit/api/quotes";

export default function App() {
  const [quotes,setQuotes]= useState({})
  
  async function getQuotes() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setQuotes(data[Math.floor(Math.random() * data.length)+1]);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(()=>{
    getQuotes();
  },[])
  

  return (
    <div className="App">
    <h1 className="title">Generador de Frases</h1>
    <div className="quote-box">
    <p className="quotes" id="text">{quotes.text}</p>
    <p className="author" id="author">- {quotes.author ? quotes.author : "Anónimo"}</p>
    <div className='buttons'>
      <button className="button" onClick={getQuotes} id="new-quote">Nueva Frase</button>
      <button className="button" onClick={getQuotes} id="tweet-quote" >
        <a href="twitter.com/intent/tweet" target="_blank">Tweet</a>
      </button>
    </div>
    </div>
    <h3>By Ysacc</h3>
  </div>
  )
}