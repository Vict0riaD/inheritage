// window.addEventListener('DOMContentLoaded', () => {
//         const box = document.querySelector('.box');
//
//         box.addEventListener('touchstart', (e) => {
//             e.preventDefault();
//
//             console.log('start');
//             // console.log(e.touches);
//             console.log(e.targetTouches);
//         });
    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();
    //
    //     console.log('move');
    // });
    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //
    //     console.log('end');
    // });
// });
'use strict';
// const p = document.querySelectorAll('p');
// console.log(p);
// // const script = document.createElement('script');
// // script.src = "intitled/test.js";
// // script.async = false;
// // document.body.append(script);
//
// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false;
//     document.body.append(script);
//
// }
// loadScript("untitled/test.js");
// loadScript("untitled/some.js");

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[1].classList.toggle('red'));
// if (btns[1].classList.contains(red)){
//     console.log('red');
// };

btns[0].addEventListener("click", () => {
   // if(!btns[1].classList.contains('red')){
   //     btns[1].classList.add('red');
   // } else {
   //    btns[1].classList.remove('red');
   // }
    btns[1].classList.toggle('red');
});
// wrapper.addEventListener('click', (event) => {
//     if(event.target && event.target.tagName == 'BUTTON') {
//         console.log('Hello!');
//     }
// });

wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.matches('button.red')) {
        console.log('Hello!');
    }
});
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);











