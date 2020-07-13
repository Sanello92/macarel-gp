import React from 'react';
import SliderProduct from '../../ComponentsSlider/SliderProduct/SliderProduct';
import SliderReviews from '../../ComponentsSlider/SliderReviews/SliderReviews';
import { FaFacebook, FaInstagram, FaViber } from "react-icons/fa";
import './mainPage.css';

function App() {
    return (
        <div className="body-mainPage">
            <header className="header" id="header">
                <div className="container">
                    <div className="row pt-5">
                        <div className="header__block col-xl-4 offset-1">
                            <img src="img/logo-mainpage.png" alt="logo-main-page"></img>
                        </div>
                    </div>
                </div>
            </header>
            <section className="section-product" id="product">
                <div className="container  p-0">
                    <div className="row">
                        <div className="col-xl-12 p-0">
                            <h1 className="section-name">Продукція</h1>
                            <SliderProduct />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-about-us d-none d-sm-none d-md-none d-lg-block d-xl-block" id="aboutUs">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="section-about-us__img col-xl-12">
                            <h1 className="section-name">Про Macarel</h1>
                            <p className="section-about-us__text" >Якщо ви шукаєте торт на замовлення до Дня Народження, весілля чи на
                            хрестини, якщо ви бажаєте порадувати себе чи близьких вишуканими макаронс, - то ви зайшли на правильну
                     сторінку!<br /><br /> Macarel - це бренд кондитера Ірини Макарчук з Білої Церкви, котра присвятила своїй юлюбленій
                     справі вже більше 4 років і за цей час знайшла свій унікальний стиль та має лист очікування на місяці
                     наперед. Будь-який торт, муссовий чи бісквітний, будь-який набір макаронс - це витвір кондитерського
                     мистецтва, котрий принесе вам естетичну і гастрономічну насолоду та додасть позитивних емоцій до вашого свята!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-how-we-work" id="howWeWork">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <h1 className="section-name">Як замовити?</h1>
                            <div className="ordering-methods">
                                <div className="order-method">
                                    <div className="order-method__stroke">
                                        <img className="order-method__img" src="/img/section-how-we-work-img-2.png" alt="Оформіть доставку"></img>
                                        <p className="order-method__name">Написати повідомлення</p>
                                        <p className="order-method__description">Viber<br></br> Inastagram<br></br> Facebook</p>
                                    </div>
                                </div>
                                <div className="order-method">
                                    <div className="order-method__stroke">
                                        <img className="order-method__img" src="/img/section-how-we-work-img-3.png" alt="Замовте заздалегідь"></img>
                                        <p className="order-method__name">Вказати у повідомленні:</p>
                                        <ol className="order-method__description"><li>1.Дата</li><li>2.Тематика</li> <li>3.Дизайн</li><li>4.Начинка</li></ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-our-secret" id="ourSecret">
                <div className="section-our-secret-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <h1 className="section-name">У чому мій секрет?</h1>
                                <p className="section-our-secret__text">Одного разу спробувавши наші десерти, ви знову за ними<br></br>повернетеся. Магія? Ледь ледь. А ще:</p>
                                <div className="our-secret justify-content-center">
                                    <div className="secret">
                                        <img src="/img/section-our-secret-img-1.png" alt="Особливі рецепти"></img>
                                        <p className="secret__name">Особливі рецепти</p>
                                        <p className="secret__text">В Macarel ви знайдете і класику, і сучасні поєднання смаків і
                                        текстур. Від шоколадного бісквіту з вишнею в тортах до груші з горгонзолою в
                                    макаронс.<br /><br /> P.S. За оновленням асортименту та палітри смаків найкраше
                                    слідкувати в
                                    Instagram.</p>
                                    </div>
                                    <div className="secret">
                                        <img src="/img/section-our-secret-img-2.png" alt="Якісні продукти"></img>
                                        <p className="secret__name">Якісні продукти</p>
                                        <p className="secret__text">Бельгійський шоколад, смачнюща карамель, текстурний фундук,
                                        неповторні фісташки, ароматне манго, екзотичний кокос, малина як з дитинства,
                                    витончена полуниця, солодка груша, пікантна горгонзола і це тільки початок)))</p>
                                    </div>
                                    <div className="secret">
                                        <img src="/img/section-our-secret-img-3.png" alt="Особливі рецепти"></img>
                                        <p className="secret__name">Натхнення і любов</p>
                                        <p className="secret__text">Талант кондитера + свобода творчості + любов до клієнтів =
                                    унікальна симфонія смаку Macarel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-contact-us" id="contactUs">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h1 className="section-name">Контакти</h1>
                            <div className="row">
                                <img className="img-fluid d-none d-md-block d-lg-block d-xl-block col-6" src="./img/section-contact-us-img.png" alt="Зв’язатись з нами" />
                                <div className="contact-us__contact text-center col-sm-10 col-md-5 col-lg-5 col-xl-5 offset-1">
                                    <span class="contact-us__contact-name">Адреса:</span>
                                    <p class="contact-us__contact-info">м.Біла Церква</p>
                                    <span class="contact-us__contact-name">Телефон:</span>
                                    <p class="contact-us__contact-info">+ (380) 96 055 16 02</p>
                                    <div className="social-icons">
                                        <span><a className="fabCu contUs" href="http://facebook.com"><FaFacebook /></a></span>
                                        <span><a className="fabCu contUs" href="http://instagram.com"><FaInstagram /></a></span>
                                        <span><a className="fabCu contUs" href="http://viber.com"><FaViber /></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-reviews">
               <div className ="reviews">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h1 className="section-name">Відгуки</h1>
                            <SliderReviews />
                        </div>
                    </div>
                </div>
              </div>
            </section>
        </div>
    );
}

export default App;