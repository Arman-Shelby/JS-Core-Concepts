/* function counter (){
    let count = 0 ;
    function innerFunc(){
        console.log('Inside the inner function.  Someone called me. ');
    }
    return innerFunc;
}

const output = counter();
console.log(output()) */

function counter (){
    let count  = 10;

    return function(user){
        count = count + 5; 
        console.log('Inside the inner function', user, count)
    }
}

/* const innerFunc = counter();
innerFunc()
innerFunc()
innerFunc() */


const rahimCounter = counter();
rahimCounter('rahim');
rahimCounter('rahim');
rahimCounter('rahim');
rahimCounter('rahim');

console.log('----------------------------------')
const karimCounter = counter();
karimCounter('karim');
rahimCounter('rahim');

console.log('----------------------------------')


const jabbarCounter = counter();
jabbarCounter('steve')
jabbarCounter('steve')
karimCounter('karim');
rahimCounter('rahim');
