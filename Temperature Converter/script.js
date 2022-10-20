let inputSelection = document.getElementById("inputSelection");
let outputSelection = document.getElementById("outputSelection");
let userInput = document.getElementById("userInput");
let userOutput = document.getElementById("userOutput");

userInput.addEventListener("keyup",temeratureConvert);
inputSelection.addEventListener("change",temeratureConvert);
outputSelection.addEventListener("change",temeratureConvert);
userOutput.addEventListener("change",temeratureConvert);
let fromUser ;
let toUser ;

function temeratureConvert(){
    fromUser = inputSelection.value;
    toUser = outputSelection.value;

    // validating for Celcius 
    
    if(fromUser==="celcius" && toUser==="fahrenhight"){
        userOutput.value = (userInput.value*9/5) + 32;
    }else if(fromUser==="celcius" && toUser==="kelvin"){
        userOutput.value = (userInput.value) + 273 ;     // formula issue 
    }else if(fromUser==="celcius" && toUser==="celcius"){
        userOutput.value = userInput.value;
    }

    // validating for fahrenhight ===> ok
    
    if(fromUser==="fahrenhight" && toUser==="celcius"){
        userOutput.value = (userInput.value-32)*5/9 ;
    }else if(fromUser==="fahrenhight" && toUser==="kelvin"){
        userOutput.value = ((userInput.value-32)*5/9) + 273 ;
    }else if(fromUser==="fahrenhight" && toUser==="fahrenhight"){
        userOutput.value = userInput.value;
    }
    
    // validating for kelvin  

    if(fromUser==="kelvin" && toUser==="fahrenhight"){
        userOutput.value = ((userInput.value-273*9/5))+ 32; // formula issue
    }else if(fromUser==="kelvin" && toUser==="celcius"){
        userOutput.value = userInput.value - 273;
    }else if(fromUser==="kelvin" && toUser==="kelvin"){
        userOutput.value = userInput.value;
    }
}
// temeratureConvert()