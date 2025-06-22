"use client";

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

export default function App() {

  const [month, setMonth] = useState("january");

  const renderDinosaur = (month) => {
    month = month.toLowerCase();
    const container = document.getElementsByClassName("dinosaurPlaceholder")[0];
    const root = ReactDOM.createRoot(container)
    root.render(
      <div className="dinosaur">
        <img src={`/photos/${month}.jpg`} className="dinosaurImg" alt="dinosaur" />
      </div>
    );
  }

  return (
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
