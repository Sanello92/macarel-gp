import React from 'react';
import CandySlider from '../../ComponentsSlider/CandySlide/CandySlider'
import './candy.css'

function CandyBar() {
   return (
      <div className="body-page">
         <div className="header-page">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-12 candy-slider">
                     <h1 className="header__title">Кенді бар</h1>
                     <CandySlider />
                  </div>
               </div>
            </div>
         </div>

         <div className="candy">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-8">
                     <h2 className="candy__title">Кенді бар</h2>
                  </div>
               </div>
               <div className="row candy-bar">
                  <div className="col-xl-6 candy__block">
                     <div className="candy__block__title ">
                        <img src="img/Ellipse 41.png" alt="" />
                        <span>Кейкпос (від 20 грн/шт)</span>
                     </div>
                     <div className="candy__block__p">
                        <p>Маленькі кульки на паличці покриті шоколадом і задекоровані за бажанням </p>
                        <p>-шоколадні</p>
                        <p>-фісташкові</p>
                        <p>Мінімальне замовлення 15 шт</p>
                     </div>
                  </div>
                  <div className="col-xl-6 candy__block">
                     <div className="candy__block__title ">
                        <img src="img/Ellipse 41.png" alt="" />
                        <span>Капкейк (від 40 грн/шт)</span>
                     </div>
                     <div className="candy__block__p">
                        <p>Тістечко в середині з ягодами/фруктами покрите кремчизом, декор за бажанням</p>
                        <p>Мінімальне замовлення 6 шт</p>
                     </div>
                  </div>
               </div>
               <div className="row candy-bar">
                  <div className="col-xl-6 candy__block">
                     <div className="candy__block__title ">
                        <img src="img/Ellipse 41.png" alt="" />
                        <span>Зефір (15 грн/шт)</span>
                     </div>
                     <div className="candy__block__p">
                        <p>Маленькі кульки на паличці покриті шоколадом і задекоровані за бажанням </p>
                        <p>-шоколадні</p>
                        <p>-фісташкові</p>
                        <p>Мінімальне замовлення 15 шт</p>
                     </div>
                  </div>
                  <div className="col-xl-6 candy__block">
                     <div className="candy__block__title">
                        <img src="img/Ellipse 41.png" alt="" />
                        <span>Макарон (25 грн/шт)</span>
                     </div>
                     <div className="candy__block__p">
                        <p>Маленькі кульки на паличці покриті шоколадом і задекоровані за бажанням </p>
                        <p>-шоколадні</p>
                        <p>-фісташкові</p>
                        <p>Мінімальне замовлення 15 шт</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default CandyBar;