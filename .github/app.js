//Switches

const color = 'red';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}
let day;
switch(new Date().getDay()){
    case 0:
        day='Sunday';
        break;
    case 1:
        day='Monday';
        break;
    case 2:
        day='Tuesday';
        break;
    case 3:
        day='Wednesday';
        break;
    case 4:
        day='Thursday';
        break;
    case 5:
        day='Friday';
        break;
    case 6:
        day='Saturday';
        break;
}

console.log(`Today is ${day}`);

//Traversy Array

//Create some arrays;
const numbers =[43,56,34,23,5,234];
const numbers2 =new Array(22,234,2543,656);
const fruit = ['Apple', 'Banana','Orange', 'Pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

//Get array length
val=numbers.length;
//Check if is array
val=Array.isArray(numbers);
//Get single value
val= numbers[0]; 
//insert value into array
numbers[2]=100;
//Find index of value
val=numbers.indexOf(36);

//Mutating arrays
//Add on to end
numbers.push(250);
//Add to front
numbers.unshift(120);
//Take off end
numbers.pop();
//Take off front
numbers.shift();
//splice out values
numbers.splice(1,1);
//reverse array
numbers.reverse();


//Concatenate arrays
val= numbers.concat(numbers2);

//sort arrays
val = fruit.sort(); //alphabetical order
val= numbers.sort(); //sort by first number 

//sort by numerical order by using compare function
val= numbers.sort(function(x,y){
    return x-y;
});
//reverse sort
val=numbers.sort(function(y,x){
    return y-x;
});

//Find
function under50(num){
    return num < 50;
}


console.log(numbers);
console.log(val);

//IF ELSE 
const age =20;

if(age>18){ //when you use ===, it compares the value
    console.log('you are good to go');
} else if(age < 15){
    console.log('Get off our site');
}
else {
    console.log('You are not old enough')
};

const dice1= 6;
const dice2 = 3;

if (dice1 ===6 || dice2 ===6){ //&& means AND and || means OR
    console.log('true');
}else{
    console.log('bruh');
}


//Objects
const user = {
    name: 'Edwin',
    age: 24,
    married: false,
    purchases:["car", "phones", "laptop"],

    sayName:function(){
        console.log(this);
    }
};

console.log(user.purchases);

user.sayName();

//THIS
//console.log(this); this brings up all functions in windows 

