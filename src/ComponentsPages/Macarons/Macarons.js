import React from 'react';
import SpongeSlider from '../../ComponentsSlider/SpongeSlider/SpongeSlider';
import MacaronSlider from '../../ComponentsSlider/MacaronSlider/MacaronSlider';
import '../style.css';

function Macarons() {
    return (
        <div className="body-page">
            <div className="header-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 slider">
                            <h1 className="header__title">Макаронс</h1>
                            <div className="header__title__paragraph">
                                <p>Макаронс - це легке печиво-безе з м’якою начинкою та хрусткою скоринкою</p>
                                <p>Розрахувати необхідну вам вагу торта на захід дуже просто - в середньому 150 гр на одну людину. Ми
                                   пропонуємо 3 розміри тортів:</p>
                            </div>
                            <SpongeSlider />
                        </div>
                    </div>
                    <div className="row mac-clider-row">
                        <div className="col-xl-12 macaron-slider">
                            <h2 className="header__title">Макаронс</h2>
                            <MacaronSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Macarons;