
type Combineable = number | string;
type ConversionDes = 'as-number' | 'as-text'



function combineTypeAliases (
    input1:Combineable,
    input2:Combineable,
    resultConversion: ConversionDes
    ){

        let result;
        if(typeof input1 === 'number' && input2 === 'number' || resultConversion === 'as-number'){
            result = +input1 + +input2;
        }else{
            result = input1.toString() + input2.toString();
        }

        return result;
 }

 const combinedAges = combineTypeAliases(50, 60, 'as-number')
 console.log("adding number as number: ", combinedAges)
 
 const combinedStringAges = combineTypeAliases(30, 60, 'as-text')
 console.log("adding number as string: ", combinedStringAges)

 const combinedNames = combineTypeAliases("Ning", "thangom", 'as-text')
 console.log("adding string as string: ", combinedNames) 

 