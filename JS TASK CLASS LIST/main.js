"use strict";

let mainButton = document.getElementById("btn");

let escButton = document.getElementById('modal_esc');

let modal = document.querySelector('.modal');

let input = document.querySelector('.modal_text');

let cancel = document.querySelector('.cancel');

let cnfr =document.querySelector('.confirm');



mainButton.addEventListener('click',function(){

modal.classList.add('modal_active')


})

cnfr.addEventListener('click',function(e){

modal.classList.remove('modal_active')

console.log(input.value)


})

escButton.addEventListener('click',function(){

modal.classList.remove('modal_active')

})

cancel.addEventListener('click',function(){

modal.classList.remove('modal_active')

})