
"use strict";

let form = document.querySelector('#frm');

let username = document.querySelector('.username');

let password = document.querySelector('.password');

let infoPass = document.querySelector('.info_pass')

let message = document.querySelector('.message');

let btn = document.querySelector('.form_buttons_btn_create');

let country = document.querySelector('.drop_down')

let tdNumber = document.querySelector('.td_number')

let td1 = document.querySelector('.td1');

let td2 = document.querySelector('.td2');

let td3 = document.querySelector('.td3');

let td4 = document.querySelector('.td4');



let personsArr = [];

let number = 0;

btn.classList.add('btn_active')

form.addEventListener('input', () => {

    if (message.value.length > 0 && username.value.length > 0 && password.value.length > 0 ) {

        btn.disabled = false;

        btn.classList.remove('btn_active')
        
    } else {
        btn.classList.add('btn_active');
        btn.disabled = true;
    }
    

})

form.addEventListener('submit', (e) => {

    e.preventDefault()

    if (password.value.length < 8||password.value.length > 12) {

        password.classList.add('pass_active')

        infoPass.classList.add('active2')}

    else {

        tdNumber.innerHTML = ''
        td1.innerHTML = ''
        td2.innerHTML = ''
        td3.innerHTML = ''
        td4.innerHTML = ''

        password.classList.remove('pass_active')

        infoPass.classList.remove('active2')

        number++;


        function createObj(number, username, password, message, country) {
            this.number = number,
                this.username = username,
                this.password = password,
                this.message = message,
                this.country = country
    
        }
    
        let person = new createObj(number, username.value, password.value, message.value, country.value)
    
    
        personsArr.push(person)
    

        personsArr.map((i) => {

            tdNumber.innerHTML += i.number + '<br>';
            td1.innerHTML += i.username + '<br>';
            td2.innerHTML += i.password + '<br>';
            td3.innerHTML += i.message + '<br>';
            td4.innerHTML += i.country + '<br>';

            username.value = "";
            password.value = "";
            message.value = "";
            country.value = "";


            btn.disabled = true
            btn.classList.add('btn_active')

        })


    }


})


















