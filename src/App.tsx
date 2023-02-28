import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <>
            <Header titleForHeader={'New Header'}/>
            <Body titleForBody={'New Body'}/>
            <Footer titleForFooter={'New Footer'}/>
        </>
    );
}

export default App;
