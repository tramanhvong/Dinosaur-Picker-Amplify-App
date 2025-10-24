"use client";
/**Home page for the app with main layout**/

// Imports
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import React from 'react';
import ReactDOM from 'react-dom/client';

Amplify.configure(outputs);

const client = generateClient<Schema>();

/** Main function
1. Create a State object to store the month item.
2. Define renderDinosaur function that takes an argument 'month' of type String, and render the corresponding dinosaur.
3. Define return layout.
**/
export default function App() {

  const [month, setMonth] = useState("january");

  const renderDinosaur = (month: String) => {
    month = month.toLowerCase(); // lower case to match name of files
    const container = document.getElementsByClassName("dinosaurPlaceholder")[0];
    const root = ReactDOM.createRoot(container) 
    root.render( // case match month to name of file
      <div className="dinosaur"> 
        <img src={`/photos/${month}.jpg`} className="dinosaurImg" alt="dinosaur" /> 
      </div>
    );
  }

  return (
    /** Return method:
    1. Header part containing title and credits.
    2. Insert background music.
    3. Drop list to select month.
    4. Button and placeholder for the dinosaur output. Button triggers renderDinosaur on click.
    **/
    <main className="App">
      <header className="header">
        <h1>Which Dinosaur are you according to your birth month</h1>
        <h2>Credits to @crankbookscience on Instagram</h2>
      </header>

      <div className="body"> 
        <audio controls autoPlay loop>
          <source src="/audio/yoshi.mp3" type="audio/mpeg" /> 
        </audio>
        <div className="selectMonth">
          <label htmlFor="month" className="question">Select your birth month: </label>
          <select className="selector" id="month" name="month" value={month} onChange={(e) => setMonth(e.target.value)}>            
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>
        <button type="button" className="submitButton" onClick={() => renderDinosaur(month)}>Get Dinosaur</button>
        <div className="dinosaurPlaceholder"></div>
      </div>
    </main>
  );
}
