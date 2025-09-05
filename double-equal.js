// type coercion (type convert)
// for double equal:  : : if one value is string, another is number: convert string ---> number then compare 


// if one is boolean and another is number. converts boolean to number
console.log(2 ==2 ); //true
console.log(2 == '2' ); //true
console.log(2 == '12' ); //false


console.log(2 ==1 );
console.log(true ==1 );
console.log(false == 0 );
console.log(true =='1' ); // 1 == '1 --> 1 ==1 --> result
console.log(false == '0' );
console.log(null == undefined );
console.log(NaN == NaN );


console.log(0 == '' );
console.log([] == '' );
console.log([5] == '5' );
console.log([5] == 5 );
console.log({} == {} );
console.log([] == [] );

const p = [4, 5 , 7 , 8]
const q = p;
console.log(p==q)
console.log([5].toString ());
