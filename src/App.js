import React, { useState } from "react";
import "./App.css";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleSearchClick() {
    let gitHubUrl = `https://api.github.com/users/${searchTerm}`;

    fetch(gitHubUrl)
      .then((res) => res.json())
      .then((res) => {
        searchResults.unshift(res);
        setSearchResults(searchResults);
        setSearchTerm("");
      });
  }

  function removeResult(result) {
    let index = searchResults.indexOf(result);
    if (index > -1) {
      searchResults.splice(index, 1);
      setSearchResults(searchResults);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
      </header>
      <SearchResults
        searchResults={searchResults}
        removeResult={removeResult}
      />
    </div>
  );
}

export default App;
