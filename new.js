
function makeAvg(number) {
    let avr = 1; 
   for (let i = 0; i < number.length; i++) {
    const index = i; 
    const element =number[index];
    avr = avr / element;
    console.log( avr);
   }
}
const makeAvg=[20,25,26,30,22,40]