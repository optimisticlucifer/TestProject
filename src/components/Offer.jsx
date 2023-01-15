/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Offer(props) {
    return (
        <div className="offerContainer">
            <span>
                Our Offer
            </span>
            <div className="offerSubContainer">
                <div className="offerImgContainer">
                    <img src={require('../assets/teddy/image 16@2x.png')} />
                </div>
                <div className="offerAttrContainer">
                    <div className="attr attr1">
                        <div className="attrImg">
                        <img src={require('../assets/attr/attr1/image 17.png')} />
                        </div>
                        <div className="attrText">
                            <div id="span12">
                                New Born &amp; Baby Care Shop
                            </div>
                            <div id="span13">
                                Mauris vitae erat non nisi consequat
                            </div>
                        </div>
                    </div>
                    
                    <div className="attr attr2">
                        <div className="attrImg">
                        <img src={require('../assets/attr/attr2/image 18.png')} />
                        </div>
                        <div className="attrText">
                            <div id="span14">
                                Toddlers Clothing 
                            </div>
                            <div id="span15">
                                Duis eget suscipit nibh, et condimentum risus
                            </div>
                        </div>
                    </div>

                    <div className="attr attr3">
                        <div className="attrImg">
                        <img src={require('../assets/attr/attr3/image 19.png')} />
                        </div>
                        <div className="attrText">
                            <div id="span16">
                                Toys and Games
                            </div>
                            <div id="span17">
                                Phasellus ultricies urna tortor, a porttitor
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Offer;
