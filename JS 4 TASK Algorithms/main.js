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

