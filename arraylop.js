// var work=[
//     'ami bat khavo',
//     'ami school a jabo',
//     'ami akn gumabo',
//     'ami akn ki korbo'
// ]

// var arrayLenght = work.length;

// for (var i=0; i<2; i++) {
  
//     console.log(work[i]);
    
// }

function foo(){
     
    bar();
     console.log(foo)
   
}

function bar(){
    console.log(bar)
}
foo()


function makeAvg(numbers ){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){   
        sum = sum+ numbers[i];    
     console.log(sum);
        soulation = sum / numbers.length;    
    }
    return soulation;
}

const totalAva= [100,50,200];
var result = makeAvg(totalAva);
console.log(result);

// function make_avg(number) {
//     let ava = 1; 
//    for (let i = 1; i < number.length; i++) {
//     const index = i; 
//     const element =number[index];
//     ava = ava + element;
//     console.log( ava);
//    }
// }
// const result= make_avg[20,25,26,30,22,40];
// console.log(result);