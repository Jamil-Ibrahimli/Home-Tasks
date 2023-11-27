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


// let str = "Hello World"



// function cutString() {

//     let cutted = ' '

//     for (let i = 0; i < str.length; i++) {

//         if (i <= 5) {

//             cutted += str[i]

//         }
//         else { cutted += "...";

//     break}



//     }

//     return cutted

// }

// console.log(cutString())





// 8) Write program that truncates string in a given length, but it should not break the word: 'Hello world, nice talking to you', 20 => 'Hello world, nice...' 


// let str = 'Hello world, nice talking to you'

// let maxLength = Number(prompt("Enter desired length"))

// function catString(x) {

//     let cutted = ' '

//     let splitted = str.split(' ');

//     for (let i = 0;i<splitted.length;i++){

// if(cutted.length+splitted[i].length<x){

// cutted += splitted[i]+' ';

// }
// else{ cutted+='...';
// break;

// }
//     }

// return cutted

// }


// console.log(catString(maxLength))




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