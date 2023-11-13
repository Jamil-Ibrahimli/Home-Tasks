// 'use strict';


// #### Task 1: Function Basics
// 1.1 Create a function named `greetUser` that takes a user's name as an argument and prints a personalized greeting.



// function greetUser(name){ 

//  return `Greetings dear ${name}`

// }

// let greet = greetUser( prompt("what is your name? "))

// console.log(greet)

//-----------------------------------------------------------------------------------------------------------------------------------------------------


// 1.2 Write a function `calculateArea` that calculates and returns the area of a rectangle. The function should take the length and width as parameters.



// function calculateArea(l,w) {
    
//     let result = 0 

//     result = l * w

//     return result 

// }

// let area = calculateArea( prompt('Enter length'),prompt('Enter width'))

// console.log(`the area of a rectangle is ${area}`)


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------


// 1.3 Implement a function `isEven` that checks if a given number is even. Return `true` if it is, otherwise `false`.


// function isEven (num){

//    return (num%2 === 0) ? true : false; 

// }

// console.log(isEven(4))


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------


// #### Task 2: Array Manipulation
// 2.1 Create an array named `fruits` containing at least five different fruit names. Write a function `displayFruits` that prints each fruit in the array.


// let fruits =[
// 'banana',
// 'orange',
// 'apple',
// 'pineapple',
// 'watermelon'

// ] 


// // let displayFruits = fruits.forEach( (element)=> console.log(element))

// // console.log(displayFruits)


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------


// 2.2 Implement a function `reverseArray` that reverses the elements of an array. Test it with both numeric and string arrays.


// let fruits =[
// 'banana',
// 'orange',
// 'apple',
// 'pineapple',
// 'watermelon'

// ] 

// let numbers = [ 1,2,3,4,5,6]


// let reverseArray = fruits.reverse((i)=> i)

// console.log(reverseArray)

  

// let  reverseArray = numbers.reverse((i)=> i)

// console.log(reverseArray)


            //    or only for numbers by method of sort



//  let  reverseArray = numbers.sort((x,y)=> y-x)

//  console.log(reverseArray)


//  or by loop method for both

// function reverseArray(){
//  let newArr = []
// for ( let i = fruits.length - 1 ; i >= 0  ; i--){

// newArr.push(fruits[i])



// }         

// return newArr

// }

// console.log(reverseArray())


// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2.3 Write a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.



// let numbers = [ 1,2,3,4,5,6,7,8,9,10]


// let filterEvenNumbers = numbers.filter((num)=>num %2 === 0 )


// console.log(filterEvenNumbers)


// _________________________________________________________________________________________________________________________________________________________


// #### Task 3: Object and Methods
// 3.1 Define an object `person` with properties `name`, `age`, and `city`. Write a function `displayPersonInfo` that prints the information in a readable format.



// let person = {
// name: 'John',
// age: 32,
// city:'NewYork'

// }


// function displayPersonInfo(){

//  return ` Name - ${person.name};\n Age - ${person.age};\n City - ${person.city}`

// }

// console.log(displayPersonInfo())


// ____________________________________________________________________________________________________________________________________________________________

// 3.2 Extend the `person` object by adding a method `haveBirthday` that increments the age by 1 each time it's called.

// let person = {
//     name: 'John',
//     age: 32,
//     city:'NewYork'
    
//     }
    

// let haveBirthday =  function ( ){

// console.log( person.age+= 1)


// }

// haveBirthday()


// _________________________________________________________________________________________________________________________________________________________________

// 3.3 Create an object `car` with properties `make`, `model`, and `year`. Write a method `displayCarInfo` that prints the car's information.


// let car = {

//     make : "Toyota",
//     model : "Land Cruser",
//     year : " 1998"

// }

// let displayCarInfo = function (){ 

//     return ` Make -${car.make}  \n Model-${car.model} \n Year - ${ car.year}`



// }

// console.log(displayCarInfo())

// ___________________________________________________________________________________________________________________________________________________________________


// #### Task 4: Advanced Array Methods
// 4.1 Create an array of numbers and use the `map` function to square each element. Print the resulting array.

// let numbers = [ 1,2,3,4,5,6,7,8,9]


// let squared = numbers.map( (i)=> i ** 2 )

// console.log(squared)


// ______________________________________________________________________________________________________________________________________________________________________


// 4.2 Given an array of strings, use the `filter` function to create a new array containing only strings with more than 5 characters.


// let arr = [ 'hello','yes','true','Azerbaijan','developer']


// let filtered = arr.filter((i)=> i.length <= 5)


// console.log(filtered)


// _______________________________________________________________________________________________________________________________________________________________________


// 4.3 Write a function `calculateTotal` that takes an array of prices and uses the `reduce` function to calculate the total cost.


// let prices = [ '23','45' ,'76'  ,'68' ,'32' ,'54' ,'90' ]


// let calculateTotal=prices.reduce((x,y) =>Number(x)+Number(y) )


// console.log('Total'+' '+ calculateTotal)

