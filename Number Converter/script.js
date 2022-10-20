let inputSelection = document.getElementById("inputSelection"),
outputSelection = document.getElementById("outputSelection"),
userInput = document.getElementById("userInput"),
userOutput = document.getElementById("userOutput");
let fromNumber;
let toNumber;

// adding events 
inputSelection.addEventListener("change",changeNumber);
outputSelection.addEventListener("change",changeNumber);
userInput.addEventListener("keyup",changeNumber);
userOutput.addEventListener("change",changeNumber);

function changeNumber(){
    fromNumber = inputSelection.value;
    toNumber = outputSelection.value;

    // validating for binany numbers 

    if(fromNumber==="b" && toNumber==="o"){
        userOutput.value = (userInput.value)
    }else if(fromNumber==="b" && toNumber==="h"){
        userOutput.value = (userInput.value)
    }else if(fromNumber==="b" && toNumber==="b"){
        userOutput.value = userInput.value
    }

    // validating for octal 
    if(fromNumber==="o" && toNumber==="b"){
        userOutput.value = (userInput.value)
    }else if(fromNumber==="o" && toNumber==="h"){
        userOutput.value = (userInput.value)
    }else if(fromNumber==="o" && toNumber==="o"){
        userOutput.value = userInput.value;
    }

    // validating for hexadecimal
    if(fromNumber==="h" && toNumber==="h"){
        userOutput.value = userInput.value;
    }else if(fromNumber==="h" && toNumber==="o"){
        userOutput.value = (userInput.value)
    }else if(fromNumber==="h" && toNumber==="b"){
        userOutput.value = (userInput.value)
    }
}

// let x = 102;  // decimal to b , o , h
// let b = x.toString(2),
// o = x.toString(8),
// h = x.toString(16);
// console.log(b,o,h)
// // binary to octal 
// let binary = 1010101001; 
// let octal = parseInt(binary,2).toString(8);
// console.log(octal)

// binany to hexa 

// var binany = 1011;
// var hexa = parseInt(binany, 2).toString(16);
// console.log(hexa)

