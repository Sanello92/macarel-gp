import React from 'react';
import './footer.css';
import { FaFacebook, FaInstagram, FaViber } from "react-icons/fa";

function App() {
   return (
      <footer className="footer">
         <div className="container">
            <div className="row">
               <div className="footer__block col-xl-12">
                  <div className="footer__block__item col-3">
                     <img className="logo" src="img/footer-logo.png" alt="My Landing"></img>
                  </div>
                  <div className="footer__block__item col-3">
                     <a className="footer__item" href="#header">Головна</a>
                     <a className="footer__item" href="#product">Продукція</a>
                     <a className="footer__item" href="#aboutUs">Про нас</a>
                     <a className="footer__item" href="#howWeWork">Оплата і доставка</a>
                     <a className="footer__item" href="#contactUs">Контакти</a>
                  </div>
                  <div className="footer__block__item col-3">
                     <p>Адреса:</p>
                     <p>м.Біла Церква</p>
                     <p>Телефон:</p>
                     <p>+ (380) 96 055 16 02</p>
                  </div>
                  <div className="footer__block__item-social col-4 align-self-end">
                     <span><a className="fab foot" href="http://facebook.com"><FaFacebook /></a></span>
                     <span><a className="fab foot" href="http://instagram.com"><FaInstagram /></a></span>
                     <span><a className="fab foot" href="http://viber.com"><FaViber /></a></span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
export default App;