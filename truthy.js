let data;
data = 0 ;
data = ''; // empty string is falsie
data = ' '; // has an white space is truthy
data = '0';
data = false;
data = true;
data = null;
data = {};
data = [];
data = false;
data = true;
data = [];
console.log('Value of data', data);

if (data) {
    console.log('value of data is truthy')
}
else{
    console.log(data,'is falsie')
}


// if i need to capture the falsy value to go inside if block 

//use logical not
if(!data){
    console.log('inside if with a falsie value')
}

//capture all positive value
// double not  !!
//capture any value to boolean (true false)
if(!!data === true){
    console.log('only true inside the double not')
}