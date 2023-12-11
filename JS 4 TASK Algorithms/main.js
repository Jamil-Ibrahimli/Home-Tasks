"use strict";

// 17ce dene algoritmik taskdi:)) 
// Qeyd: hazir methodlardan istifade etmeden custom alqoritmlerle hell olunmalidir



// 1) Write program that will reverse string: 'Hello world' => 'dlrow olleH'    

// let word = 'Hello World';

// let reversed = " ";

// for(let i = word.length-1;i>=0;i--){

//  reversed +=word[i]       

// }
// console.log(reversed)




// 2)Write program to repeat every character in string 3 times: 'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'    

// let word = 'Hello World';

// let repeated = " "

// for(let i = 0;i<word.length;i++){

// repeated += word[i].repeat(3)

// }

// console.log(repeated)




// // 3)Write program to repeat given string n times: 'Hello world', 3 => 'Hello worldHello worldHello world' 

// let word = 'Hello world'

// let repeated = ''

// let n = 3

// for(let i = 0; i< n ; i++){

// repeated += word

// }
// console.log(repeated)



//4)Write program to find the first not repeated character: 'abacddbec' => 'e'   


// let word = 'abacddbec'


// let nonRepeated = ''



// for (let i = 0; i < word.length; i++) {

//     let checking = false

//     for (let j = 0; j < word.length; j++) {

//         if (i !== j && word[i] === word[j]) {

//             checking = true


//         }

//     }

//     if (!checking) {

//         nonRepeated = word[i]
//   break 

//     }

// }


// console.log(nonRepeated)



//5) Write program to find the first  repeated character: 'abacddbec' => 'e'    




// let word = 'abacddbec'

// let repeated = ''

// for (let i = 0; i < word.length; i++) {

//     let checking = false

//     for (let j = 0; j < word.length; j++){

//  if(i!==j&&word[i]==word[j] ){ checking=true;

//     repeated=word[i];
//     break

// }

//     }

//     if(checking){  break  }

// }

// console.log(repeated)





// 6) Write program to find the count of each character: 'abacddbec' => {a: 2, b: 2, c: 1, d: 3, e: 1}


// let inputWord = 'abacddbec'


// function countChar(str){

//   let obj = { }

//   for(let i of str){

// if(obj[i]){

// obj[i]++

// }
// else{ obj[i]=1}
//   }

// return obj

// }

// console.log(countChar(inputWord))





// 7)Write program that truncates string in a given length: 'Hello world', 5 => 'Hello...'    


// const string =  'Hello world';

// let length = 5;

// function  getTrancated(str,length){


// let trancated = ''

// for(let i =0;i<length;i++){
// trancated+=str[i]

// }

// return trancated+'...'


// }

// console.log(getTrancated(string,length))





// 8) Write program that truncates string in a given length, but it should not break the word: 'Hello world, nice talking to you', 20 => 'Hello world, nice...' 


// const string = 'Hello world, nice talking to you';

// let max = 20;


// function getTrancated(str,max){

// let result = ''

// let splitted = str.split(' ')
// for(let i =0;i<splitted.length;i++){

//   if(result.length+splitted[i].length<max){


//   result+=" "+splitted[i]

//   }  
//   else{ break}

// }

// return result.trim()+"..."
// }

// console.log(getTrancated(string,max))



// 9) Create a program to calculate the sum of the elements in an array of numbers: [1, 2, 3, 4, 5] => 15    

// let numbers = [1, 2, 3, 4, 5]



// function getSum(arr) {

//     let sum = 0
//     for (let i of arr) {


//         sum += i

//     }


//     return "the sum is"+" "+ sum


// }

// console.log(getSum(numbers))



// 10)Create a program to calculate the average of the elements in an array of numbers: [1, 2, 3, 4, 5] => 3   



// const numbers = [1,2,3,4,5];

// function getAverage(arr){
//  let average = 0;

//  for(let i of arr){

// average+=i


//  }


//  return average/arr.length
// }

// console.log("The average is"+' '+getAverage(numbers) )



// 11)  Create a program to find the maximum number in an array of numbers: [1, 2, 3, 4, 5] => 5    

// let numbers = [1,2,3,4,5];

// function findMax (arr){
// let maxNum = 0 ;

// for(let i=0;i<arr.length;i++){

// if(arr[i]>maxNum){

// maxNum=arr[i]

// }

// else ( maxNum="Not accept")

// }


// return maxNum

// }



// console.log(findMax(numbers))



// 12) Create a program to find the minimum number in an array of numbers: [1, 2, 3, 4, 5] => 1    


// let numbers = [1,2,3,4,5]

// function findMin(arr){

//  let minNum = arr[0]   

// for(let i = 0;i<arr.length;i++){

// if(minNum>arr[i]){ minNum=arr[i]  }

// }

// return minNum

// }


// console.log(findMin(numbers))




//  13) Create a program to find the second largest number in an array of numbers: [1, 2, 3, 4, 5] => 4   


// let numbers = [1, 2, 3, 4, 5];

// function getSecondLargest(arr) {
//   let s_largest = 0
//   let  f_largest = 0

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > f_largest) {

//             s_largest=f_largest

//             f_largest = arr[i]


//   }


// else if( arr[i]>s_largest&&arr[i]<f_largest ){

// s_largest=arr[i]

// }

//     }

//     return s_largest

// }


// console.log(getSecondLargest(numbers))






// 14)

// Create a program to find the second smallest number in an array of numbers: [1, 2, 3, 4, 5] => 2    

// let numbers=[1,2,3,4,5];


// function getSecondSmallest(arr){

// let second = arr[1];

// let first = arr[0];


// for(let i =0; i<arr.length;i++){

// if(first>arr[i]){

// second=first;

// first=arr[i]

// }else if( arr[i]<second && arr[i]>first){



//     second = arr[i]
// }



// }
// return second

// }

// console.log(getSecondSmallest(numbers))





// 15)Create a program to find the count of each element in an array of numbers: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2} 


// const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]


// function getEachCount(arr) {
//     let obj = {};

//     for (let i of arr){

// if(obj[i]){


//     obj[i]+=1
// }
// else(obj[i]=1)



//     }


// return obj

// }

// console.log(getEachCount(array))




// 16)Create a program to find the sum of the odd numbers in an array of numbers: [1, 2, 3, 4, 5] => 9

// const array = [1, 2, 3, 4, 5];

// function getOddSum(arr){

//   let result = 0;
  
//   for(let i = 0;i<arr.length;i++){

//     if(arr[i]%2===1){


//         result+=arr[i]

//     }
    

//   }
// return result
// }

// console.log(getOddSum(array))



// 17)Create a program to find the sum of the even numbers in an array of numbers: [1, 2, 3, 4, 5] => 6

// const array = [1, 2, 3, 4, 5] 

// function getEvenSum (arr){

// let result =0

// for(let i = 0;i<arr.length;i++){

// if(arr[i]%2===0){

// result+=arr[i]


// }


// }
// return result

// }


// console.log(getEvenSum(array))