import React, { Component } from "react";
import Slider from 'react-slick';
import './candySlider.css';


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
              <img src="/img/candy-bar.png" alt="img" />
              <img src="/img/candy-bar.png" alt="img" />
              <img src="/img/candy-bar.png" alt="img" />
        </Slider>
      </div>
    );
  }
}