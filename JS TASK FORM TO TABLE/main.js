
"use strict";


let form = document.querySelector('#frm');

let username = document.querySelector('.username');

let password = document.querySelector('.password');

let message = document.querySelector('.message');

let btn = document.querySelector('.btn_create');

let country = document.querySelector('.drop_down')

let tdNumber = document.querySelector('.td_number')

let td1 = document.querySelector('.td1');

let td2 = document.querySelector('.td2');

let td3 = document.querySelector('.td3');

let td4 = document.querySelector('.td4');


let personsArr = [];

let number = 0;

form.addEventListener('submit', (e) => {



    e.preventDefault()

    number++;

    console.log(number)

    function createObj(number, username, password, message, country) {
        this.number = number,
            this.username = username,
            this.password = password,
            this.message = message,
            this.country = country

    }



    let person = new createObj(number, username.value, password.value, message.value, country.value)

    personsArr.push(person)
    tdNumber.innerHTML = ''
    td1.innerHTML = ''
    td2.innerHTML = ''
    td3.innerHTML = ''
    td4.innerHTML = ''

    if (username.value.length < 0) {

        alert("please don't leave an empty field")
       btn.setAttribute('disabled',true);
    }

    else { btn.removeAttribute('disabled')
        personsArr.map((i) => {

            tdNumber.innerHTML += i.number + '<br>';
            td1.innerHTML += i.username + '<br>';
            td2.innerHTML += i.password + '<br>';
            td3.innerHTML += i.message + '<br>';
            td4.innerHTML += i.country + '<br>';
        })

        username.value = "";
        password.value = "";
        message.value = "";
        country.value = "";
    }


})
















