import React from "react";

function SearchResults(props) {
  function removeResult(result) {
    props.removeResult(result);
  }

  if (props.searchResults.length > 0) {
    return (
      <div className="search-result-cont">
        {props.searchResults.map((result, i) => {
          return (
            <div key={i} className="search-result">
              {result.name}
              <button onClick={(e) => removeResult(result)}>X</button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div />;
  }
}

export default SearchResults;
