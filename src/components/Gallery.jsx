/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Carousel from 'react-grid-carousel'

const Gallery = () => {
    return (
        <div className="galleryDiv">
            <Carousel cols={5} rows={1} gap={10} loop showDots>
                <Carousel.Item>
                    <img width="50%" src={require('../assets/gallery/img1/Group 13.png')} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="50%" src={require('../assets/gallery/img2/Group 14.png')} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="50%" src={require('../assets/gallery/img3/Group 15.png')} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="50%" src={require('../assets/gallery/img4/Group 16.png')} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="50%" src={require('../assets/gallery/img5/Group 17.png')} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="50%" src={require('../assets/gallery/img3/Group 15.png')} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="50%" src={require('../assets/gallery/img5/Group 17.png')} />
                </Carousel.Item>
            </Carousel>
            <div className="arrowDiv">
                <img src={require('../assets/leftarrow/arrow-circle-broken-left.png')} />
                <img src={require('../assets/rightarrow/arrow-circle-broken-right.png')} />
            </div>
        </div>
    )
}

export default Gallery;