/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Carousel from 'react-grid-carousel'

const Gallery = () => {
    return (
        <div className="galleryDiv">
            <Carousel cols={5} rows={1} gap={10} loop showDots arrowLeft= <img type='prev' src={require('../assets/leftarrow/arrow-circle-broken-left.png')} /> arrowRight=<img type='next' src={require('../assets/rightarrow/arrow-circle-broken-right.png')} />>
                <Carousel.Item>
                    <div className="item" style={{textAlign:"center"}}>
                        <img width="60%" src={require('../assets/gallery/img1/Group 13.png')} />
                        <br />
                        <button style={{backgroundColor:"rgb(70 217 19)",border:"none"}}>Dorongan</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="item" style={{textAlign:"center"}}>
                        <img width="60%" src={require('../assets/gallery/img2/Group 14.png')} />
                        <br />
                        <button style={{backgroundColor:"rgb(226 18 19)",border:"none"}}>Boneka</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="item" style={{textAlign:"center"}}>
                        <img width="60%" src={require('../assets/gallery/img3/Group 15.png')} />
                        <br />
                        <button style={{backgroundColor:"rgb(0 175 237)",border:"none"}}>Mobilian</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="item" style={{textAlign:"center"}}>
                        <img width="60%" src={require('../assets/gallery/img4/Group 16.png')} />
                        <br />
                        <button style={{backgroundColor:"rgb(255 18 118)",border:"none"}}>Puzzle</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="item" style={{textAlign:"center"}}>
                        <img width="60%" src={require('../assets/gallery/img5/Group 17.png')} />
                        <br />
                        <button style={{backgroundColor:"rgb(53 197 190)",border:"none"}}>Popular</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="item" style={{textAlign:"center"}}>
                        <img width="60%" src={require('../assets/gallery/img3/Group 15.png')} />
                        <br />
                        <button style={{backgroundColor:"rgb(0 175 237)",border:"none"}}>Mobilian</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="item" style={{textAlign:"center"}}>
                        <img width="60%" src={require('../assets/gallery/img5/Group 17.png')} />
                        <br />
                        <button style={{backgroundColor:"rgb(53 197 190)",border:"none"}}>Popular</button>
                    </div>
                </Carousel.Item>
            </Carousel>
            {/* <div className="arrowDiv">
                <img src={require('../assets/leftarrow/arrow-circle-broken-left.png')} />
                <img src={require('../assets/rightarrow/arrow-circle-broken-right.png')} />
            </div> */}
        </div>
    )
}

export default Gallery;