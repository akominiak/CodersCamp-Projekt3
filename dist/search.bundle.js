!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";function r(e){const n=document.getElementById("input").value;e.map(e=>{const t=new RegExp(n,"i");if(e.stacja==e.stacja.match(t)){const n=document.querySelector(".icon");e.temperatura>20?n.innerHTML='<i class="far fa-sun"></i>':e.temperatura<=20&&e.temperatura>10?n.innerHTML='<i class="fas fa-cloud-sun"></i>':e.temperatura<=10&&e.temperatura>0?n.innerHTML='<i class="fas fa-cloud"></i>':n.innerHTML='<i class="fas fa-snowflake"></i>',document.querySelector(".item1").innerHTML=e.stacja,null!=e.temperatura?document.querySelector(".item2").innerHTML="Temperatura: "+e.temperatura+"&#186C":document.querySelector(".item2").innerHTML="Temperatura: Brak danych",null!=e.cisnienie?document.querySelector(".item3").innerHTML="Ciśnienie: "+e.cisnienie+" hPa":document.querySelector(".item3").innerHTML="Ciśnienie: Brak danych",document.querySelector(".item4").innerHTML=e.data_pomiaru+", "+e.godzina_pomiaru+":00"}})}t.r(n),t.d(n,"weatherData",(function(){return r}))},function(e,n,t){"use strict";t.r(n),t.d(n,"findCity",(function(){return o})),t.d(n,"displayCities",(function(){return c}));var r=t(0);const i=document.querySelector("input.searchCity"),a=document.querySelector(".suggestion"),u=[];function o(e,n){return n.filter(n=>{const t=new RegExp(e,"gi");return n.stacja.match(t)})}function c(){const e=o(i.value,u).map(e=>`\n        <li>\n        <span class ="name">${e.stacja}</span>\n        </li>\n        `).join("");a.innerHTML=e,""==i.value&&(a.innerHTML='<li><span class ="name">Brak wyników</span></li>');const n=[...document.querySelectorAll("ul.suggestion li span")];console.log(n);for(let e=0;e<n.length;e++)n[e].addEventListener("click",(function(){i.value=this.innerHTML,a.innerHTML="",Object(r.weatherData)(u)}))}fetch("https://danepubliczne.imgw.pl/api/data/synop").then(e=>e.json()).then(e=>u.push(...e)),i.addEventListener("keypress",(function(e){13===(e.which||e.keyCode)&&Object(r.weatherData)(u)}))}]);