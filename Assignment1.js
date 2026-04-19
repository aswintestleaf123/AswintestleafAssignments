// 1.  count the occurrences of a specific element in an array using JavaScript.
const nums = [2,4,5,2,1,2]

const k = 2

let count=0

for(let i=0; i<=nums.length; i++){

    if(nums[i]===k){

        count=++count
    }
}

console.log("*********************************")
console.log("Program 1:::::::::::::Occurence of the given number " + k + " in the array is " + count)
console.log("*********************************")

// 2. Sum of n values - cumulative sum of numbers from 1 to a given `n

let sum = 0
const n= 6

function cumulativesum(sum, n){
for(let i=1; i<=n; i++){

    sum = sum+i

    console.log("Current loop variable is "+ i)
    console.log("Current iteration sum value is "+ sum)
}

console.log("*********************************")
console.log("Program 2::::::::::::::::Final cumulative sum is "+ sum)
console.log("*********************************")
}


 cumulativesum(sum, 5)

//  3. compute the intersection of two arrays. The 
// intersection should include elements that appear in both arrays without any duplicates.

const arr1 = [2,4,5,2,1,2]
const arr2 = [9,7,8,4,3,4,9,2]

function intersection(arr1, arr2){
let finalarray=[]
console.log("************Program 3*********************")

for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++)
       if(arr1[i]===arr2[j] && !finalarray.includes(arr1[i])) {
    finalarray.push(arr1[i])
       }
}

 console.log("Intersection of 2 arrays without duplicates is " + finalarray)

 console.log("#######################")
 }

 intersection (arr1, arr2)


//  Learn to identify and return pairs of indices whose elements sum up to a specific target using nested loops in 
// JavaScript. 

const num1 = [2, 4, 7, 8, 11, 14];  

const target = 18;
let results=[]

for(let i=0; i<num1.length; i++){
    for(let j=i+1; j<num1.length; j++){
        if(num1[i]+num1[j]==target)
        {
            //$i ,Sj returns number only which is value
            // ${num1[i]} returns number value of num1 
            results.push(`${num1[i]}+${num1[j]} (indices: ${i}, ${j})`);
        }
    }
}

  console.log("Pairs of indices " + results)


//   5. Understand different ways to declare functions in JavaScript and how to use callback 
// functions.

//named function
console.log("Named Function")
function userProfile(name){
    console.log("Hello" + " " + name)
}

userProfile("Guru")

// Task 2: Arrow Function


console.log("Arrow Function")
 let double =(a)=> a+a
 console.log(double(6))

// Task 3: Anonymous Function 
console.log("Anonymous Function")
let anonfn = function()
{
setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
}, 2000);}

 console.log(anonfn())

 //Task 4: callback function
 function getUserData(callback){
    global.setTimeout(()=>{
    let user ={name1: "Guru", age: 40};
      callback(user);
    }, 3000);
 }

 getUserData((user)=>{
    console.log(user.name1)
    console.log(user.age)
 })