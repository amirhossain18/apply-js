// console.log(4%2);
// console.log(125%2);
// console.log(52%2);
// console.log(252%2);
// console.log(252%2);
// console.log(253%2);
// console.log(257%2);

                                                           // odd/ even number 
function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder);  
    if(remainder === 0){
        return true;
    }      
    else{
        return false;
    }     
}

const sami = isEven(26);
// console.log(sami);
                                                          //  sum of array
function getSum(number) {
    let sum = 0; 
   for (let i = 0; i < number.length; i++) {
    const index = i; 
    const element =number[index];
    sum = sum + element;
    // console.log(index, element, sum);
    console.log(sum);
   }
}
const myNmber=[20,25,26,30,22,40]


getSum(myNmber); 
                                                           //liefyear
function isLiefyear(number) {
    let year = number % 4;
    // if(year === 0) {
    //     console.log('this year is liefyear');
    // }
    // else(
    //     console.log('this year is not liefyear')
    // )
}

const amir = isLiefyear(1995)
const samir = isLiefyear(1996)
                                                                        // multification
function multification(number){
    for(let i=1; i<=10; i++ )
    console.log( `${number} x ${i} = ${number* i }` )
}

multification(18);