import React from "react";
import Header from "./Header.jsx";
import MiddleSection from "./MiddleSection.jsx";
import Searchbar from "./Searchbar.jsx";
import Toppick from "./Toppick.jsx";
import Gallery from "./Gallery.jsx";
import ProductSection from "./ProductSection.jsx";
import Offer from "./Offer.jsx";
import Slider from "./Slider.jsx";
import Footer from "./Footer.jsx";

function App(){
    return (
        <>
            <Header />
            <MiddleSection />
            <Searchbar />
            <Toppick />
            <Gallery />
            <ProductSection />
            <Offer />
            <Slider />
            <Footer />
        </>
    );
}

export default App;