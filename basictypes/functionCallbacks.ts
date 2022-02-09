
// function types and callbacks
// void type does not return anything

function addHandle(n1: number, n2: number, callback: (num:number)=> void)  {
    const result = n1 + n2;
    callback(result);
}

addHandle(1,10, (result) => {
    console.log(result);
})