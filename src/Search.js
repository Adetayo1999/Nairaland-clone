import React from 'react';
import "./Search.css";

function SearchComponent() {
    return (
        <form>
        <div className ="input-form">
          <input placeholder="search for a topic ..." type="search"/>
        </div>
        <div className ="submit-form">
        <input type="submit" value="Search"/>
        </div>
        </form>
    )
}

export default SearchComponent
