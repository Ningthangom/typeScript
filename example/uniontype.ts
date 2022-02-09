function combine (input1:number | string, input2:number | string) {
    /*  if(typeof n1 !== 'number' || typeof n2!== 'number'){
         throw new Error('Wrong input type')
     } */
   /*   if(result) {
         console.log(`this is adding`, n1+n2)
     }else{
         console.log ('this is result: false', n1 + n2);
     } */
     let result2;
     if(input1 === 'number' && input2 === 'number'){
         result2 = input1 + input1;
     }else{
         result2 = input1.toString() + input2.toString()
     } 
     console.log('result2', result2);
 }

 combine(4, 5)
 