// the unknown type

//let userInput: unknown;
let userInput: any;

//unknown type will store any value
userInput = 5;
userInput = 'Max';


let userName: string;

// this will not work as userInput is unknown type
//userName = userInput;

// if userInput is set to "any" type 
// it will not throw any error 
userName = userInput

// checking with if statement 
if(typeof userInput === 'string') {
    userName = userInput
    console.log("input was string type: ", userName)
}