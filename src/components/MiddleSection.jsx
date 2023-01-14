/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function MiddleSection() {
    return (
        <div className="mid-container">
            <div className="box1">
                <img className="rectangle" src={require('../assets/Rectangle/Rectangle 1.png')} />
                <span id="span1">Fun to care,</span>
                <img className="horse" src={require('../assets/horse/image 4.png')} />
                <img className="cone" src={require('../assets/cone/image 5.png')} />
                <span id="span2">Comfy Feel</span>
                <span id="span3">Mauris aliquet enim quis odio lacinia, id viverra elit convallis. Nunc nulla massa elit</span>
                <button id="shopNowBtn">SHOP NOW</button>
            </div>
            <div className="box2">
                <img src={require('../assets/childimage/Group 12.png')} />
            </div>
        </div>
    );
}

export default MiddleSection;
