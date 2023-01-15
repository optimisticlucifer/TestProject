/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Product from "./Product";
import productList from "./productList.js";

function ProductSection() {

    const [sortMethod, setSortMethod] = useState("sale");
    const [productToRender, setproductToRender]= useState(productList.map((product)=> (<Product details={product} />)));


    function setSort(med){
        setSortMethod(med);

        const temp= productList.map((product)=>{
            if(product[med]===true){
                return (<Product details={product} />)
            }
            return "";
        })

        setproductToRender(temp);
    }


    return (
        <div className="productSection">
            <div className="firstDiv">
                <span id="span7">
                    Trending Products
                </span>
                <br />
                <span id="span8">
                    Popular Product
                </span>
                <br />
                <span id="span9">
                Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                </span>
            </div>
            <div className="sortBtn">
                <button id="sortBtn1" autofocus="true" onClick={() => setSort("sale")}>Sale Product</button>
                <button id="sortBtn2" onClick={() => setSort("top")}>Top Product</button>
                <button id="sortBtn3" onClick={() => setSort("popular")}>Popular Product</button>
            </div>
            <div className="products">
                {productToRender}
            </div>
        </div>
    );
}

export default ProductSection;
