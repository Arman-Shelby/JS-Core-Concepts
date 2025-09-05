// all primitive values (number , string, boolean) always pass by value 


function multiply (x, y){
    x = x+5;
    y = y+5;
    console.log('After the function call: ', x , y)

    const mult = x * y;
    return mult;

}

const a = 5;
const b = 7;
console.log('before the function call: ', a , b)

const result = multiply(a,b)
console.log(result)


// non  primitive values (object, array) are passed by reference 

const manik = {name: 'Manik', balance: 5000}
const roton= {name: 'Roton', balance: 45000}

console.log('before call', manik, roton);

function totalMoney(person1,  person2){
    person1.balance = 0;
    person2.balance = person2.balance / 2;
    const total = person1.balance + person2.balance;
    return total;
}

const balance =  totalMoney(manik , roton)
console.log('balance', balance);

console.log("after function called", manik , roton)