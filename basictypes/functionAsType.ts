// function return types and void


function add(n1: number, n2: number) {
    return n1+n2;
}

// this is void return type
// if a function does not return a propervalue, then 
// use "void" return type
function prinntResult(num: number): void {
    console.log("result: " + num);
    return;
}


console.log(prinntResult(add(1, 10)));


let someValue: undefined;

// storing a function inside a variable
// and this will return anytype such as void or number or string
let combineValues: Function;
// or specifically
// let combineValues: (a: number, b: number) => number;
 combineValues = add;
// after asigning combineValues as function;
// you can not give other types such as number or string values
// for example: combineValues = 5 or 'Adam'
console.log(combineValues(20,9));