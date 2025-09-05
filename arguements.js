function add (a,b ){
    console.log(arguments);
    
    const params = [...arguments]
    console.log(params)
}

add(88 , 77 , 5 ,6 ,7) 