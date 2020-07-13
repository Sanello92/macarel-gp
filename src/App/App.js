import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Nav from '../Nav/Nav';
import MainPage from '../ComponentsPages/MainPage/MainPage';
import MousseCakes from '../ComponentsPages/MousseCakes/MousseCakes'
import Macarons from '../ComponentsPages/Macarons/Macarons';
import CandyBar from '../ComponentsPages/CandyBar/CandyBar';
import SpongeCakes from '../ComponentsPages/SpongeCakes/SpongeCakes';
import Footer from '../Footer/Footer';



const App = (props) =>{
    return (
        <BrowserRouter>
            <Nav />
            <Route path='/' component={MainPage} exact={true}/>
            <Route path='/MainPage' component={MainPage} />
            <Route path='/SpongeCakes' component={SpongeCakes}/>
            <Route path='/Macarons' component={Macarons}/>
            <Route path='/CandyBar' component={CandyBar}/>
            <Route path='/MousseCakes' component={MousseCakes}/>
            <Footer />
        </BrowserRouter>
);
}

export default App;