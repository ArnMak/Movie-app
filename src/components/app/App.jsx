import React from "react";
import AppHeader from "../appHeader/AppHeader";
import AppMenu from "../appMenu/AppMenu";
import Carousel from "../carousel/Carousel";





const App = () => {

    return (
        <div className="wrap">
            <div className="app">
                <AppHeader/>
                <AppMenu/>
                <Carousel/>
            </div>
        </div>

    )
}

export default App;




