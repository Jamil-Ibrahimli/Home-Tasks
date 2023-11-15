"use strict";


                                       // ***MAP***

// Task: Verilən arraydə aşağıda qeyd olunan taspşırıqları həll etmək lazımdır.

// const persons = [
//   {
//       name: 'Luke Skywalker',
//       height: '172',
//       mass: '77',
//       eye_color: 'blue',
//       gender: 'male',
//   },
//   {
//       name: 'Darth Vader',
//       height: '202',
//       mass: '136',
//       eye_color: 'yellow',
//       gender: 'male',
//   },
//   {
//       name: 'Leia Organa',
//       height: '150',
//       mass: '49',
//       eye_color: 'brown',
//       gender: 'female',
//   },
//   {
//       name: 'Anakin Skywalker',
//       height: '188',
//       mass: '84',
//       eye_color: 'blue',
//       gender: 'male',
//   },
// ];



// 1. Get the array of all names.

// let onlyNames= persons.map((i)=> i.name)

// console.log(onlyNames)




// 2. Get the array of all heights

// let onlyHeights = persons.map((i)=> i.height)

// console.log(onlyHeights)




// 3. Get the array of objects with just name and height properties

// let nameHeight= persons.map(({name ,height})=>({name,height}) ) 


// console.log(nameHeight)



// 4. Get the array of all first names



// let firstName = persons.map((i)=> i.name.split(' ').shift())


// console.log(firstName)


// ____________________________________________________________________________________________________________________________________________________


                                             //  ***FILTER***
 
                            
                            
//  const persons = [
//   {
//       name: 'Luke Skywalker',
//       height: '172',
//       mass: '77',
//       eye_color: 'blue',
//       gender: 'male',
//   },
//   {
//       name: 'Darth Vader',
//       height: '202',
//       mass: '136',
//       eye_color: 'yellow',
//       gender: 'male',
//   },
//   {
//       name: 'Leia Organa',
//       height: '150',
//       mass: '49',
//       eye_color: 'brown',
//       gender: 'female',
//   },
//   {
//       name: 'Anakin Skywalker',
//       height: '188',
//       mass: '84',
//       eye_color: 'blue',
//       gender: 'male',
//   },
// ];



// 1. Get characters with a mass greater than 100

// let greatMass = persons.filter((i)=>Number(i.mass) > 100 )


// console.log(greatMass)



// 2. Get characters with a height of less than 200


// let lessMass = persons.filter((i)=> Number(i.height)<200)

// console.log(lessMass)



// 3. Get all male characters

// let allMale = persons.filter((i)=>i.gender=='male')

// console.log(allMale)




// 4. Get all female characters

// let allFemale = persons.filter((i)=>i.gender=== 'female')

// console.log(allFemale)


// ____________________________________________________________________________________________________________________________________________________________

                                 // ***SORT***

//  const persons = [
//   {
//       name: 'Luke Skywalker',
//       height: '172',
//       mass: '77',
//       eye_color: 'blue',
//       gender: 'male',
//   },
//   {
//       name: 'Darth Vader',
//       height: '202',
//       mass: '136',
//       eye_color: 'yellow',
//       gender: 'male',
//   },
//   {
//       name: 'Leia Organa',
//       height: '150',
//       mass: '49',
//       eye_color: 'brown',
//       gender: 'female',
//   },
//   {
//       name: 'Anakin Skywalker',
//       height: '188',
//       mass: '84',
//       eye_color: 'blue',
//       gender: 'male',
//   },
// ];



      
// 1. Sort by mass


// let sortedMass = persons.sort((x,y)=>Number( x.mass) - Number(y.mass))

// console.log(sortedMass)



// 2. Sort by height

// let sortedHeight = persons.sort((x,y)=> Number(x.height) - Number(y.height))

// console.log(sortedHeight)



// 3. Sort by name

// let sortedName= persons.sort((a,b)=> a.name.localeCompare(b.name))
// console.log(sortedName)

// 4. Sort by gender       


// let sortedGender = persons.sort((a,b)=>a.gender.localeCompare(b.gender))

// console.log(sortedGender)


// ______________________________________________________________________________________________________________________________________________________________
                        
                                                //    ***EVERY***



//  const persons = [
//   {
//       name: 'Luke Skywalker',
//       height: '172',
//       mass: '77',
//       eye_color: 'blue',
//       gender: 'male',
//   },
//   {
//       name: 'Darth Vader',
//       height: '202',
//       mass: '136',
//       eye_color: 'yellow',
//       gender: 'male',
//   },
//   {
//       name: 'Leia Organa',
//       height: '150',
//       mass: '49',
//       eye_color: 'brown',
//       gender: 'female',
//   },
//   {
//       name: 'Anakin Skywalker',
//       height: '188',
//       mass: '84',
//       eye_color: 'blue',
//       gender: 'male',
//   },
// ];



// 1. Does every character have blue eyes?

// let checkEye = persons.every((i) =>i.eye === "blue" )

// console.log(checkEye)



// 2. Does every character have a mass of more than 40?

// let checkMass = persons.every((i)=> Number(i.mass) > 40)

// console.log(checkMass)



// 3. Is every character shorter than 200?

// let checkHeight = persons.every((i)=>Number(i.height)<200 )

// console.log(checkHeight)



// 4. Is every character male?

// let checkGender = persons.every((i)=>i.gender==="male")

// console.log(checkGender)



// _______________________________________________________________________________________________________________________________________________________________


                                    // ***SOME***


// const persons = [
//       {
//           name: 'Luke Skywalker',
//           height: '172',
//           mass: '77',
//           eye_color: 'blue',
//           gender: 'male',
//       },
//       {
//           name: 'Darth Vader',
//           height: '202',
//           mass: '136',
//           eye_color: 'yellow',
//           gender: 'male',
//       },
//       {
//           name: 'Leia Organa',
//           height: '150',
//           mass: '49',
//           eye_color: 'brown',
//           gender: 'female',
//       },
//       {
//           name: 'Anakin Skywalker',
//           height: '188',
//           mass: '84',
//           eye_color: 'blue',
//           gender: 'male',
//       },
//     ];
    


//     1. Is there at least one male character?

// let checkMale = persons.some((i)=>i.gender=="male")

// console.log(checkMale)



// 2. Is there at least one character with blue eyes?

// let checkEye = persons.some((i)=>i.eye_color==="blue")

// console.log(checkEye)



// 3. Is there at least one character taller than 210?

// let checkHeight = persons.some((i)=>Number(i.height)> 210)
// console.log(checkHeight)

// 4. Is there at least one character that has a mass of less than 50? 


// let checkMass = persons.some((i)=> Number(i.mass)<50 )
// console.log(checkMass)