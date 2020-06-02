import React from "react";
import './Search.css';



const Search = (props) => {
  

  return (
    <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
          </div>
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Enter First or Last Name"
          aria-label="Search"
          onChange={(e) => props.setFilter(e.target.value)} 
        />
  
        </div>
    </div>
  );
}
export default Search;