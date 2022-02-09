

function combineLiteralType (
    input1:number | string,
    input2:number | string,
    resultConversion: 'as-number' | 'as-text'
    ){

        let result;
        if(typeof input1 === 'number' && input2 === 'number' || resultConversion === 'as-number'){
            result = +input1 + +input2;
        }else{
            result = input1.toString() + input2.toString();
        }

        return result;
 }

 const combinedAges = combineLiteralType(30, 60, 'as-number')
 console.log("adding number as number: ", combinedAges)
 
 const combinedStringAges = combineLiteralType(30, 60, 'as-text')
 console.log("adding number as string: ", combinedStringAges)

 const combinedNames = combineLiteralType("Ning", "thangom", 'as-text')
 console.log("adding string as string: ", combinedNames) 

 