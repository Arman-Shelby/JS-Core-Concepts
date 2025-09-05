// callback
function pakhiBhai (callMeBack, patro,  patri){
    console.log('value of patro', patro)
    console.log('callMeBack parameter', callMeBack)
    if(patri){
        // console.log(callMeBack)
        callMeBack(patro)
    }
    else{
        console.log('Tor kopale biya nai')
    }

}

function callSomeOne(person){
    console.log('calling', person)
}

// callSomeOne('Jodu')
// pakhiBhai(callSomeOne, 'jodu', 'modhu')

// myBtn.addEventListener('click', () => {

// })

const addFive = x => x + 5;
[1,2,3,4,5].map(addFive)