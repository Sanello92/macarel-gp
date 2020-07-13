import React, { Component } from "react";
import Slider from 'react-slick';
import './macaronSlider.css';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      slidesPerView: 'auto',
    };
    return (
      <div className="container headerSlider">
        <Slider {...settings}>
              <img src="/img/macaron.png" alt="img" />
              <img src="/img/macaron.png" alt="img" />
              <img src="/img/macaron.png" alt="img" />
        </Slider>
      </div>
    );
  }
}