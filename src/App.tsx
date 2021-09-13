import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quiz from "./Quiz";
import Card from "./Card/Card";

function App() {
  const [url, setUrl] = useState<string>("");
  const [showquiz, setshowquiz] = useState<boolean>(false);

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const taburl = tabs[0].url;
        setUrl(taburl!);
        console.log(taburl);
      });
  }, []);

  console.log();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{url}</div>
        <div>Sample</div>
        <button onClick={() => setshowquiz(!showquiz)}>Show Quiz</button>
        {showquiz && (
          <Quiz />
        )}
        <Card />
      </header>
    </div>
  );
}

export default App;
