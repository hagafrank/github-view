import React, { useState } from "react";
import "./App.css";

function handleSearchClick(searchTerm) {
  fetchGitHubUser(searchTerm);
}

function fetchGitHubUser(name) {
  let gitHubUrl = `https://api.github.com/users/${name}`;

  fetch(gitHubUrl)
    .then((res) => res.json())
    .then((res) => console.log(res));
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => handleSearchClick(searchTerm)}>Search</button>
        </div>
      </header>
    </div>
  );
}

export default App;
