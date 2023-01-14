/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Searchbar() {
    return (
        <div>
            <button className="searchBox">
                <div className="searchImgDiv">
                    <img src={require('../assets/search/search-lg.png')} />
                </div>
                    <span>Find your product</span>
                    <input type="text" name="searchBox" id="searchBox" placeholder="Search" />
            </button>
        </div>
    );
}

export default Searchbar;
