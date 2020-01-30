const $ = require('jquery');
const sayHello = require('./sayHello.js');

sayHello();

(function(){
"use strict";
    $(document).ready(function(){

        const mainHeader = $('#main-header');

        setInterval(function(){
            mainHeader.toggleClass("red");
        }, 1000);

        const sayHello = () => console.log("Hello");



    });
})();