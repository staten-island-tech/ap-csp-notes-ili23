function calculateBill(billAmount, taxRate){ //Use parameters aka placeholder
    console.log(billAmount, taxRate);
    console.log('Running Calculate Bill!');
    const total = billAmount* (1 +taxRate); 
    return total;
}

const myTotal = calculateBill(100,0.13); //add arguments aka actual value into the specific bill part. 
const myTotal2 = calculateBill(200,0.13);
//console.log(myTotal, myTotal2);

//When you declare variable outside/global scope for a function, it will be "renamed" when it enters the funciton



function sayHiTo(firstName){
    return `Hello ${firstName}`;

}

//const greeting = sayHiTo('Wes');
//console.log(greeting);

const myTotal3 = calculateBill(20+20+30+20, 0.15)

function doctorize(name){
    return `Dr. ${name}`;
}

function yell(name = 'Silly Goose'){  //if no one enters name, it will default to Silly Goose
    return `HEY ${name.toUpperCase()}`;

}

yell(doctorize('wes'));