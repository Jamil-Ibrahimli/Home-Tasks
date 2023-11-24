"use strict";

let oldImage = document.getElementById('image')

let button = document.getElementById('btn')

function changeImage (){

oldImage.src="Small dog.jpg"

}
button.addEventListener('click',changeImage)




// Task 1: Change the Background Color
// Create an HTML file with a button. When the button is clicked, change the background color of the page to a random color.