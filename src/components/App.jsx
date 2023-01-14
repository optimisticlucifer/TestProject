import React from "react";
import Header from "./Header.jsx";
import MiddleSection from "./MiddleSection.jsx";
import Searchbar from "./Searchbar.jsx";
import Toppick from "./Toppick.jsx";
import Gallery from "./Gallery.jsx";

function App(){
    return (
        <>
            <Header />
            <MiddleSection />
            <Searchbar />
            <Toppick />
            <Gallery />
        </>
    );
}

export default App;