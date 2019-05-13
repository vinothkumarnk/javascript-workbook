//1. Write a JavaScript program to display the current day and time.
console.log(Date())
document.getElementById("date").innerHTML = Date();

//2. Write a JavaScript program to convert a number to a string.
var num = 15;
var n = num.toString();
console.log(n);
document.getElementById("numtostr").innerHTML = n;

//3. Write a JavaScript program to convert a string to the number.
var a = parseInt("10");
console.log(a);
document.getElementById("strtonum").innerHTML = a;

//5. Write a JavaScript program that adds 2 numbers together.
var a = 10;
var b= 15;
var z = a+b;
console.log(z);
document.getElementById("add2num").innerHTML = z;


//6. Write a JavaScript program that runs only when 2 things are true.
var a = 5;
var b = 5;
if (a===b){
    console.log("True");
    document.getElementById("run2true").innerHTML = "True";
}



//7. Write a JavaScript program that runs when 1 of 2 things are true.
var a = 5;
var b = 5;
if (a > b || a==b){
    console.log("True");
    document.getElementById("run1true").innerHTML = "True";
}


//8. Write a JavaScript program that runs when both things are not true.
var a = 1;
var b = 9;
if (a > b || a==b){
    console.log("True");
    document.getElementById("runnottrue").innerHTML = "True";
}
else { console.log("false"); document.getElementById("runnottrue").innerHTML = "false"; }



//4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
var f = true;
var c = null;
var u = undefined;
var p = 1;
var a = "b";

document.getElementById("bool").innerHTML = typeof f;
document.getElementById("null").innerHTML = typeof c;
document.getElementById("undef").innerHTML = typeof u;
document.getElementById("num").innerHTML = typeof p;
document.getElementById("notnum").innerHTML = isNaN(p);
document.getElementById("str").innerHTML = typeof a;

console.log(typeof f);
console.log(typeof c);
console.log(typeof u);
console.log(typeof p);
console.log(isNaN(p));
console.log(typeof a);


