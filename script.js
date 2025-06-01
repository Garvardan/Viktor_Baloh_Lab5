"use strict"

const root = document.documentElement;
const theme_button = document.querySelector(".theme");
let isBlack = false;


theme_button.addEventListener('click', () =>{
    if (isBlack == false){
        root.style.setProperty('--textMain','rgb(209,213,219)');
        root.style.setProperty('--textSecond','rgb(249,250,251)');
        root.style.setProperty('--bgColorMain','rgb(3,7,18)');
        root.style.setProperty('--bgColorSecond','rgb(55,65,81)');
        isBlack =true;
    }
    else{
        root.style.setProperty('--textMain','rgb(75,85,99)');
        root.style.setProperty('--textSecond','rgb(17, 24, 39)');
        root.style.setProperty('--bgColorMain','rgb(255,255,255)');
        root.style.setProperty('--bgColorSecond','rgb(249,250,251)');
        isBlack = false;
    }
})