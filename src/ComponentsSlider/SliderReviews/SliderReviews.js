import React, { Component } from "react";
import SliderTwo from "react-slick";
import './sliderReviews.css';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            autoplaySpeed: 4000,
            autoplay: true,
        };
        return (
            <div>
                <SliderTwo {...settings}>
                    <div className="slider-two__item col-xl-8">
                        <div className="row justify-content-center">
                            <img className="slider-two__item-img col-xl-3" src="/img/section-reviews-slider-img.png" alt="Аватар"></img>
                            <div className="col-xl-9">
                                <p className="slider-two__item-name">Анастасія</p>
                                <p className="slider-two__item-text">Ваш тортик смачнющий Іріш, ти майстер своєї
                                        справи!!! Ми родиною не один раз замовляли в тебе смаколики і ну дуууже
                                        задоволені завжди!!! Дякуємо тобі за красу, смакоту і креативність.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-two__item col-xl-8">
                        <div className="row justify-content-center">
                            <img className="slider-two__item-img col-xl-3" src="/img/section-reviews-slider-img.png" alt="Аватар"></img>
                            <div className="col-xl-9">
                                <p className="slider-two__item-name">Анастасія</p>
                                <p className="slider-two__item-text">Ваш тортик смачнющий Іріш, ти майстер своєї
                                        справи!!! Ми родиною не один раз замовляли в тебе смаколики і ну дуууже
                                        задоволені завжди!!! Дякуємо тобі за красу, смакоту і креативність.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-two__item col-xl-8">
                        <div className="row justify-content-center">
                            <img className="slider-two__item-img col-xl-3" src="/img/section-reviews-slider-img.png" alt="Аватар"></img>
                            <div className="col-xl-9">
                                <p className="slider-two__item-name">Анастасія</p>
                                <p className="slider-two__item-text">Ваш тортик смачнющий Іріш, ти майстер своєї
                                        справи!!! Ми родиною не один раз замовляли в тебе смаколики і ну дуууже
                                        задоволені завжди!!! Дякуємо тобі за красу, смакоту і креативність.</p>
                            </div>
                        </div>
                    </div>
                </SliderTwo>
            </div>
        );
    }
}