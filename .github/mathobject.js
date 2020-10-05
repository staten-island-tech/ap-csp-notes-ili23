const num1 = 100;
const num2 = 50;
let val;

//Simple Math w/Numbers
val = num1 + num2
val = num1 * num2
val = num1 - num2
val = num1 / num2
val = num1 % num2

//Math Object
val = Math.PI; 
val = Math.E;
val = Math.round(2.8); //rounds normally
val = Math.ceil(2.4); //rounds up
val = Math.floor(2.4); //rounds down
val = Math.sqrt(64); //squareroot
val = Math.abs(-5); //absolute value
val = Math.pow(8, 2); //power of something (base, exponent)
val = Math.min(2,3,4,5,6,7); //Gives minimum
val = Math.max(2,6,7); //Gives maximum
val = Math.random(); //Gives random decimal
val = Math.random()*20 + 1; //Gives random number from 1 to 20 but this has decimal points.
val = Math.floor(Math.random()*20 + 1); //Gives random number from 1 to 20 but rounds it down to remove decimals


console.log(val);