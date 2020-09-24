const name= "Iram"; //global scope


function test(){ //function scope
    //const name="Name";        If you declare variables inside a function, it will not be availbale outside
    console.log("Party Time");
    console.log("Party Time");
    console.log("Party Time");
}
test();


function adder(num1, num2){
    console.log(num1 + num2);
}
adder(5,10);


function toUpper(text){ 
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}
toUpper(name);


const toUpper = function(){

}

const toUpper = () => {
    
}