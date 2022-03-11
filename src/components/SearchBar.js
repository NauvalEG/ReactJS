import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [word, setWord] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(word);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
