//  Conditionals & Loops1. 
// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
const n=100;

for(let i=1;i<=n;i++){
    if(i%3==0 && i%5==0 ){
        console.log("FizzBuzz")
    }else if(i%5==0){
        console.log("Buzz")
    }else if(i%3==0){
        console.log("Fizz")
    }else{
        console.log(i)
    }
}
// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

var sum= 0

for(let i=0;i<1000;i++ ){
    if(i%3==0 && i%5==0){
        sum+=i
    }
}
console.log(sum)
// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

const y=20
for(let i=0;i<=20;i++){
    if(i%2===0){
        console.log(i +" "+ "is even")
    }else if(i%2!=0){
        console.log(i +" "+ "is odd")
    }
}
// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]

let num = [-2, 4,-5, 6,0]
var l=0
for(i=0;i<num.length;i++){
    if(num[i]>l){
        l=num[i]
    }    
}
console.log(l)

// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
var x=10
var w=40
if(x>w){
    console.log(x)
}else {
    console.log(w)
}
// 6. Write a JavaScript program to find leap years from 2000 to 2022
// multiple of 400.
//  multiple of 4 and not a multiple of 100.
for(let y=2000;y<=2022; y++){
    if(y%400==0 && y%100!=0 ){
        console.log(y +" "+ "is a leap year")
    }else if(y%4==0){
        console.log(y +" " +"is a leap year")
    }
}
