import React from "react";
import "./search.css"
const Search = ({ setSearch, updatePageNumber }) => {
  return (
    <form
    >
      <input className="search"
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search"

        type="text"
      />

    </form>
  );
};

export default Search;
