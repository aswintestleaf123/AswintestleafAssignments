//1. Check the given number is Odd or Even
// const {log} = require("node.console")
// const {reverse} = require("node.dns")

let a=5
if(a%2==0){

    console.log("Given number is even")
}

else{
     console.log("Given number is odd")

}

//2. Strings in JS -have a string, reverses it, and checks if the reversed string is a palindrome, print the results.
let str = "Teru"
    let rev = ""

function stringValidation()
{
    

    for(let i=str.length-1; i>=0; i--){
        rev = rev + str.charAt(i)
    }

    if(str == rev){
        console.log("Given String "+ str + " is a palindrome")
    }
    else{
        console.log("Given String "+ str + " is not a palindrome")
    }
}

stringValidation()

//3.JavaScript code that determines if a number is positive, negative, or zero and returns a corresponding string indicating the type
let positive ="positive number"
let negative ="negative number"
let zero ="is zero"
for( let j=-2; j<=3 ; j++){
    if(j<0){
        console.log("Given number is "+ j + " "+  negative)
    }
    else if(j===0){
         console.log("Given number is "+ j +" " + zero)
    }
    else{
        console.log("Given number is "+ j + " "+positive) 
    }
}

//4.Create two JavaScript code with `if-else` for browser launch messages, and with `switch` for test type

let browserName= 'chrome'

if(browserName =='chrome'){
    console.log("Launch chrome Browser")
}
else{
    console.log("Launch Firefox Browser")
}

//To check
let testtype="smoke"

switch(testtype){
    
        case "sanity":
        console.log("Execute sanity suite")
        break
        case "regression":
        console.log("Execute regression suite")
        break
        default:
        console.log("Execute smoke suite")
        
}


// 5.evaluates a student's score and prints their grade using a switch statement to assess score ranges.

let score = 34

function gradecheck(){

    switch(true)
    {
      case (score >= 85) :
        console.log("Student grade is 1")
        break;
        case (score >=60 && score <85 ) :
        console.log("Student grade is 2")
        break;
       default:
         console.log("Student grade is 3")
        break;
    }
}
gradecheck()

//6.JavaScript code that prints odd numbers between 1 and 25

for(let i=0;i<=25;i++){
    if(i%2!=0){
        console.log("Number is "+ i)
    }
}
