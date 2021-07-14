import React, { useEffect } from 'react';
import './app.scss';
import 'particles.js/particles';
const particlesJS = window.particlesJS;

const App = () => {
    useEffect(()=>{
        particlesJS.load('particles-js','assets/particles.json',function(){
        console.log('particles js loaded');
    });   
    },[]);
    return (
        <div>
           <div id="particles-js"></div>
        </div>
    );
};

export default App;