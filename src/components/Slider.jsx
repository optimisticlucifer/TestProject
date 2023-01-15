/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Carousel from 'react-grid-carousel'

const Slider = () => {
    return (
        <div className="SliderDiv">
            <Carousel cols={4} rows={1} gap={10} loop autoplay={2000} hideArrow >
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby1/image 20.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby2/image 21.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby3/image 22.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby2/image 21.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby2/image 21.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby3/image 22.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby2/image 21.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby3/image 22.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby2/image 21.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby3/image 22.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby2/image 21.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby3/image 22.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby2/image 21.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby3/image 22.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby2/image 21.png')} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="sliderItem">
                        <img width="90%" src={require('../assets/slider/baby2/image 21.png')} />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;