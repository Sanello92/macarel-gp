import React, { Component } from "react";
import Slider from "react-slick";
import './sliderProduct.css';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            autoplaySpeed: 4000,
            autoplay: true,
            slidesPerView: 'auto',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false
                    }
                }
            ]
        }
        return (
            <Slider {...settings}>
                <div className="slider-one__item">
                    <img className="slider-one__img" src="img/slider-one-img-1.png" alt="Бісквітні торти"></img>
                    <p className="slider-one__text">Бісквітні торти</p>
                </div>
                <div className="slider-one__item">
                    <img className="slider-one__img" src="img/slider-one-img-2.png" alt="Бісквітні торти"></img>
                    <p className="slider-one__text">Макаронс</p>
                </div>
                <div class="slider-one__item">
                    <img className="slider-one__img" src="img/slider-one-img-3.png" alt="Бісквітні торти"></img>
                    <p className="slider-one__text">Кенді бар</p>
                </div>
                <div className="slider-one__item">
                    <img className="slider-one__img" src="img/slider-one-img-4.png" alt="Мусові торти"></img>
                    <p className="slider-one__text">Мусові торти</p>
                </div>
            </Slider>
        );
    }
}
