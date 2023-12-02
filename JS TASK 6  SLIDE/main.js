"use strict"


let image = document.querySelector('.section_slider_images')
let image1 = document.querySelector('.section_slider_images1')
let image2 = document.querySelector('.section_slider_images2')

let btnRight = document.querySelector('.right')
let btnLeft = document.querySelector('.left')



let arr = [
    'first.jpg',
    'second.jpg',
    'third.jpg',
    'fourth.jpg',
    'fivth.jpg',
    'sixth.jpg'

]



document.addEventListener('DOMContentLoaded', () => {

 
    image.setAttribute('src', `./images/${arr[0]}`)


})

let index = 0



btnRight.addEventListener('click', () => {

    index++

    if (index >= arr.length) { index = 0 }

    image.setAttribute('src', `./images/${arr[index]} `)


})


btnLeft.addEventListener('click', () => {
    index--

    if (index < 0) { index = arr.length - 1 }
    image.setAttribute('src', `./images/${arr[index]}`)


})




