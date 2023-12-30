
"use strict";

let headerCart = document.querySelector('.header_cart');
let sidebar = document.querySelector('.main_sidebar');
let cartContainer = document.querySelector(".main_sidebar_container");
let arrCart = JSON.parse(localStorage.getItem('item')) || [];
let shop = document.querySelector('.main_products');
let headerCartCount = document.querySelector('.header_cart_count');
let clearItem = document.querySelector('.main_sidebar_footer_button-box_button');
let infromation = document.querySelector('.header_information')


headerCartCount.innerHTML = arrCart.length;
arrCart.map((x) => {




    let { images, title, description, price, discountPercentage, id, count } = x;


    cartContainer.innerHTML += `<div class="main_sidebar_container_item">
    <div class="main_sidebar_container_item_image"><img src="${images[0]}" alt="IMAGE">
    </div>

    <div class="main_sidebar_container_item_product-details_left">

        <h2>${title}</h2>

        <div class="main_sidebar_container_item_product-details_left_count">
            <button class="main_sidebar_container_item_product-details_left_count_minus" id='${id}'><i
                    class="fa-solid fa-minus"></i></button>
            <p class="main_sidebar_container_item_product-details_left_count_number " id='${id}'>${count}</p>
            <button class="main_sidebar_container_item_product-details_left_count_plus" id='${id}'><i
                    class="fa-solid fa-plus"></i></button>
        </div>

    </div>

    <div class="main_sidebar_container_item_product-details_right">

        <div class="main_sidebar_container_item_product-details_right_delete"><button
                class="main_sidebar_container_item_product-details_right_delete_junk "id='${id}'><i
                    class="fa-regular fa-trash-can"></i></button></div>
        <div class="main_sidebar_container_item_products-details_rigth_price">${price}$</div>

    </div>

</div>`;




    let totalPrice = document.querySelector('.main_sidebar_footer_total-price_amount')

    let total = arrCart.reduce((acc, curr) => {

        return acc + curr.price

    }, 0)



    totalPrice.innerHTML = `${total}$`

})




updateCount()

function updateCount() {

    let increment = document.querySelectorAll('.main_sidebar_container_item_product-details_left_count_plus')

    let outCounter = document.querySelectorAll('.main_sidebar_container_item_product-details_left_count_number')

    let decrement = document.querySelectorAll('.main_sidebar_container_item_product-details_left_count_minus')

    increment.forEach((incr) => {

        incr.addEventListener('click', () => {

            let spesObj = arrCart.find((obj) => {

                return incr.id == obj.id


            })


            outCounter.forEach((cntr) => {

                if (cntr.id == spesObj.id) {

                    spesObj.count += 1
                    cntr.innerHTML = spesObj.count

                
                   
                }


            })
            localStorage.setItem('item', JSON.stringify(arrCart))

        })


    })

    decrement.forEach((decr) => {

        decr.addEventListener('click', () => {

            let spesObj = arrCart.find((obj) => {

                return decr.id == obj.id


            })


            outCounter.forEach((cntr) => {

                if (cntr.id == spesObj.id) {

                    if (spesObj.count > 1) {
                        spesObj.count -= 1
                        cntr.innerHTML = spesObj.count
                    }

                }


            })
            localStorage.setItem('item', JSON.stringify(arrCart))

        })


    })


}



headerCart.addEventListener('click', () => {

    sidebar.classList.toggle('sidebar-active')
    headerCart.classList.toggle('header-cart-open-active')
    cartContainer.classList.toggle('container-active')
    headerCart.classList.add('header-cart-active2')
})

fetch('https://dummyjson.com/products')



    .then((res) => res.json())
    .then((json) => json.products.map((i) => {

        let { id, images, title, description, price, discountPercentage } = i

        shop.innerHTML += `<div class="main_products_item" id="product${id}">
 <div class="main_products_item_image"><img src="${images[0]}" alt="image"></div>
 <div class="main_products_item_text">
     <h2 class="main_products_item_text_title">${title}</h2>
     <p class="main_products_item_text_description">${description}</p>
     <h3 class="main_products_item_text_price">${price} $</h3>
     <p class="main_products_item_text_discount">-${discountPercentage}%</p>
 </div>
 <div class="main_products_item_button-box">
 <button  class="main_products_item_button-box_button" id="${id}"><i
             class="fa-solid fa-cart-arrow-down"></i>  Add to cart</button>
 </div>
 </div>`;


        let itemButton = document.querySelectorAll('.main_products_item_button-box_button')
        let productsDatas = json.products




        removeFromCard()


        itemButton.forEach((btn) =>

            btn.addEventListener('click', () => {

                let uniqObj = productsDatas.find((obj) => {

                    return btn.id == obj.id


                })
                infromation.classList.add('information-active')
                headerCart.classList.add('header-cart-active')
                setTimeout(() => {
                    headerCart.classList.remove('header-cart-active')


                }, 300)
                setTimeout(() => {

                    infromation.classList.remove('information-active')

                }, 1000)




                let existedProduct = arrCart.find((item) => item.id === uniqObj.id)

                if (!existedProduct) {

                    addToCart()
                    changeCount()

                } else {

                    innerCount(btn, existedProduct)


                }


                function innerCount(btn, existedProduct) {
                    let innerItemCounter = document.querySelectorAll('.main_sidebar_container_item_product-details_left_count_number')

                    let incrButton = document.querySelectorAll('.main_sidebar_container_item_product-details_left_count_plus')

                    innerItemCounter.forEach((uniqCount) => {

                        if (uniqCount.id == btn.id) {

                            existedProduct.count += 1;

                            uniqCount.innerHTML = existedProduct.count

                        }


                    })

                    incrButton.forEach((plus) => {

                        plus.addEventListener('click', () => {

                            if (existedProduct.id == plus.id) {


                                innerItemCounter.forEach((num) => {

                                    if (num.id == existedProduct.id) {

                                        existedProduct.count += 1;

                                        num.innerHTML = existedProduct.count

                                    }


                                })


                            }


                        })


                    })



                }


                function addToCart() {


                    uniqObj.count = 1

                    arrCart.push(uniqObj);


                    headerCartCount.innerHTML = arrCart.length;

                    let arrUniqObj = arrCart.find((item) => {

                        return btn.id == item.id

                    })

                    let { images, title, description, price, discountPercentage, id } = arrUniqObj;

                    cartContainer.innerHTML += `<div class="main_sidebar_container_item">
                    <div class="main_sidebar_container_item_image"><img src="${images[0]}" alt="IMAGE">
                    </div>

                    <div class="main_sidebar_container_item_product-details_left">

                        <h2>${title}</h2>

                        <div class="main_sidebar_container_item_product-details_left_count">
                            <button class="main_sidebar_container_item_product-details_left_count_minus" id='${id}'><i
                                    class="fa-solid fa-minus"></i></button>
                            <p class="main_sidebar_container_item_product-details_left_count_number" id='${id}'>1</p>
                            <button class="main_sidebar_container_item_product-details_left_count_plus" id='${id}'><i
                                    class="fa-solid fa-plus"></i></button>
                        </div>

                    </div>

                    <div class="main_sidebar_container_item_product-details_right">

                        <div class="main_sidebar_container_item_product-details_right_delete"><button
                                class="main_sidebar_container_item_product-details_right_delete_junk "id='${id}'><i
                                    class="fa-regular fa-trash-can"></i></button></div>
                        <div class="main_sidebar_container_item_products-details_rigth_price">${price}$</div>

                    </div>

                </div>`;


                    let totalPrice = document.querySelector('.main_sidebar_footer_total-price_amount')

                    let total = arrCart.reduce((acc, curr) => {

                        return acc + curr.price

                    }, 0)



                    totalPrice.innerHTML = `${total}$`




                };


                function changeCount() {

                    let increment = document.querySelectorAll('.main_sidebar_container_item_product-details_left_count_plus')

                    let outCounter = document.querySelectorAll('.main_sidebar_container_item_product-details_left_count_number')

                    let decrement = document.querySelectorAll('.main_sidebar_container_item_product-details_left_count_minus')

                    increment.forEach((incr) => {

                        incr.addEventListener('click', () => {

                            let spesObj = arrCart.find((obj) => {

                                return incr.id == obj.id


                            })


                            outCounter.forEach((cntr) => {

                                if (cntr.id == spesObj.id) {

                                    spesObj.count += 1
                                    cntr.innerHTML = spesObj.count

                                   

                                }


                            })
                            localStorage.setItem('item', JSON.stringify(arrCart))

                        })


                    })

                    decrement.forEach((decr) => {

                        decr.addEventListener('click', () => {

                            let spesObj = arrCart.find((obj) => {

                                return decr.id == obj.id


                            })


                            outCounter.forEach((cntr) => {

                                if (cntr.id == spesObj.id) {

                                    if (spesObj.count > 1) {
                                        spesObj.count -= 1
                                        cntr.innerHTML = spesObj.count
                                    }

                                }


                            })
                            localStorage.setItem('item', JSON.stringify(arrCart))

                        })


                    })


                }





                localStorage.setItem('item', JSON.stringify(arrCart))
                removeFromCard()

            })


        )


    }))





function removeFromCard() {

    let cartItem = document.querySelector('.main_sidebar_container_item');

    let deleteItem = document.querySelectorAll('.main_sidebar_container_item_product-details_right_delete_junk')


    deleteItem.forEach((del) => {

        // console.log(del)
        del.addEventListener('click', () => {

            arrCart.forEach((obj, index) => {

                if (obj.id == del.id) {

                    console.log(arrCart.splice(index, 1));

                    headerCartCount.innerHTML = arrCart.length;

                    let totalPrice = document.querySelector('.main_sidebar_footer_total-price_amount')

                    let total = arrCart.reduce((acc, curr) => {

                        return acc + curr.price

                    }, 0)

                    if (arrCart.length == 0) {

                        totalPrice.innerHTML = `0.00$`

                    } else {

                        totalPrice.innerHTML = `${total}$`
                    }


                    localStorage.setItem('item', JSON.stringify(arrCart))

                }

            })

            del.closest('.main_sidebar_container_item').remove()


        })

    })



    clearItem.addEventListener('click', () => {

        arrCart.length = 0

        headerCartCount.innerHTML = arrCart.length

        cartContainer.innerHTML = ""

        localStorage.setItem('item', JSON.stringify(arrCart))

        let totalPrice = document.querySelector('.main_sidebar_footer_total-price_amount')
        totalPrice.innerHTML = `0.00$`

    })


}
















