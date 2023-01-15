/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Product(props) {
    return (
        <div className="productContainer">
            <div className="imgContainer">
                <img src={require(`../assets/products/${props.details.img}`)} />
            </div>
            <div className="descriptionContainer">
                <span id="span10">
                    ${props.details.price}
                </span>
                <br />
                <span id="span11">
                    {props.details.name}
                </span>
            </div>
        </div>

    );
}

export default Product;
