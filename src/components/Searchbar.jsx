/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Searchbar() {
    return (
        <button className="searchBox">
            <button className="searchImgDiv">
                <img src={require('../assets/search/search-lg.png')} />
            </button>
            <span>Find your product</span>
            <input type="text" name="searchBox" id="searchBox" placeholder="Search" />
        </button>
    );
}

export default Searchbar;
