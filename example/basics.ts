
function add (n1:number, n2:number, result: boolean) {
   /*  if(typeof n1 !== 'number' || typeof n2!== 'number'){
        throw new Error('Wrong input type')
    } */
    if(result) {
        console.log(`this is adding`, n1+n2)
    }else{
        console.log ('this is result: false', n1 + n2);
    }
}

const number1 = 5;
const number2 = 10;
const printResult = false;

const result = add(number1, number2, printResult);
/* console.log(result); */