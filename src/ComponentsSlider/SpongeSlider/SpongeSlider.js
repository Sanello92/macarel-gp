import React, { Component } from "react";
import Slider from 'react-slick';
import './spongeSlider.css'; 


export default class SimpleSlider extends Component {
	render() {
		const settings = {
         infinite: true,
         lazyLoad: 'ondemand',
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: true,
         dots: true,
         slidesPerView: 'auto',
		};
		return (
			<div className="container headerSlider">
               <Slider {...settings}>
                  <div className="pie-size d-inline-flex">
                     <span className="pie-size__span">S</span>
                     <p className="pie-sixe__paragraph">маленький</p>
                     <p className="pie-sixe__paragraph">10 шт</p>
                     <p className="pie-sixe__paragraph">(ціна)</p>
                  </div>
                  <div className="pie-size d-inline-flex">
                     <span className="pie-size__span">M</span>
                     <p className="pie-sixe__paragraph">середній</p>
                     <p className="pie-sixe__paragraph">- 2 кг</p>
                     <p className="pie-sixe__paragraph">(ціна)</p>
                  </div>
                  <div className="pie-size d-inline-flex">
                     <span className="pie-size__span">L</span>
                     <p className="pie-sixe__paragraph">великий</p>
                     <p className="pie-sixe__paragraph">- 3 кг</p>
                     <p className="pie-sixe__paragraph">(ціна)</p>
                  </div>
                  <div className="pie-size d-inline-flex">
                     <span className="pie-size__span">XL</span>
                     <p className="pie-sixe__paragraph">великий xl</p>
                     <p className="pie-sixe__paragraph">- ? кг</p>
                     <p className="pie-sixe__paragraph">(ціна)</p>
                  </div>
				</Slider>
			</div>
		);
	}
}