// i need current postion of mouse every time it moves ( x asix, y-asix);

// I need to set those x any y value to circlear div

// cursor moves should get notify =  mousemove listner 
//  get value of x and y and update it to circle.

let circle = document.querySelector('#circle');
const btn = document.querySelector('#btn');
const svglem = document.querySelector('svg');
var tl = gsap.timeline();

window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;
    this.setTimeout( function(){
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 50);
    
});

btn.addEventListener('click', function(){
    tl.reverse();
    setTimeout(function(){
        svglem.classList.add('animate');
    },3500)

});


 
tl
.from('#wrapper',{
    duration: 4,
    scale: .7,
    ease: 'Expo.easeInOut',
    opacity: 0
})

.from('#whitestrpi', {
    duration: 2,
    width: 0,
    ease: 'Expo.easeInOut',
}, '-=2.5')

.from('#blackcard', {
    duration: 1.5,
    x: 50,
    opacity:0,
    ease: 'Expo.easeInOut',
},'-=1')

.from('#linelem', {
    duration: 1.5,
    x: 50,
    opacity:0,
    ease: 'Expo.easeInOut',
},'-=1')

.from('#linelem .line', {
    duration: 2,
    width: 0,
    opacity:0,
    ease: 'Expo.easeInOut',
},'-=1')


.from('#blackcard p', {
    duration: 1.2,
    y: 0,
    opacity:0,
    ease: 'Expo.easeInOut',
},'-=2')

.from('#sidelem', {
    duration: 2,
    x: 30,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=2')