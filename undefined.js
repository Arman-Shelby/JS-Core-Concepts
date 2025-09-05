/* 
*
 undefined:     not defined
*

*/


let money;
// console.log(money)
//---------------------
function total (a, b){
    // console.log('value of parameters', a, b)
}

// total(2)

//-------------

function sumOf2 (a, b){
    // console.log('value of parameters', a, b);
    const sum = a + b;
    // console.log('total is', sum)
}

const abc = sumOf2(5, 2);
// console.log(abc)



function total2(a,b){
    // console.log('value of parameters', a,b);
    if ( a === undefined || b === undefined){
        return;
    }
    if (a&&b){
        const sum = a+ b;
        // return sum;
    }
}

const result2 = total2(1)
// console.log(result2)



const phone = { brand: 'samsung' , price: 12500}

console.log(phone.price)
console.log(phone.color)

const banks  = ['sonali', 'dbbl', 'islami bank'];
// console.log(banks[6])


delete banks[1]
console.log(banks[1])

console.log('type of undefined', typeof undefined)
console.log('type of null', typeof null)