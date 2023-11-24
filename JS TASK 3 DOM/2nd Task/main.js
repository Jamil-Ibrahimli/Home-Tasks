"use sctrict";



let button = document.getElementById('btn')

let countDisplay = document.getElementById('count_display')

 function funcIncrement (){



 countDisplay.innerHTML++

}


button.addEventListener('click',funcIncrement)



// Task 2: Create an HTML file with a button and a counter display. When the button is clicked, increment the counter and update the display.