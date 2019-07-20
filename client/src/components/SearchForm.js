import React from "react";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <h3>Search</h3>
            <form id="bookSearch">
                <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Title, Author or Keywords" required/>
                <br></br>
                <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;