let inputSelection = document.getElementById("inputSelection"),
outputSelection = document.getElementById("outputSelection"),
userInput = document.getElementById("userInput"),
userOutput = document.getElementById("userOutput");
let fromHeight;
let toHeight;

// adding events 
inputSelection.addEventListener("change",changeHeight);
outputSelection.addEventListener("change",changeHeight);
userInput.addEventListener("keyup",changeHeight);
userOutput.addEventListener("change",changeHeight);

function changeHeight(){

    fromHeight = inputSelection.value;
    toHeight = outputSelection.value;
    // validating for cm 
    if(fromHeight==="cm" && toHeight==="cm"){
        userOutput.value = userInput.value;
    } if(fromHeight==="cm" && toHeight==="m"){
        userOutput.value = (userInput.value)/100;
    } if(fromHeight==="cm" && toHeight==="inch"){
        userOutput.value = (userInput.value)/2.54;
    } if(fromHeight==="cm" && toHeight==="ft"){
        userOutput.value = (userInput.value)/30.48;
    }

    // validating for m 
    if(fromHeight==="m" && toHeight==="cm"){
        userOutput.value = (userInput.value)*100
    }else if(fromHeight==="m" && toHeight==="inch"){
        userOutput.value = (userInput.value)*39.3701;
    }else if(fromHeight==="m" && toHeight==="ft"){
        userOutput.value = (userInput.value)*3.28;
    }else if(fromHeight==="m" && toHeight==="m"){
        userOutput.value = userInput.value;
    }
    
    // validating for inch 

    if(fromHeight==="inch" && toHeight==="m"){
        userOutput.value = (userInput.value)/39.3701;
    }else if(fromHeight==="inch" && toHeight==="cm"){
        userOutput.value = (userInput.value)*2.54;
    }else if(fromHeight==="inch" && toHeight==="ft"){
        userOutput.value = (userInput.value)*0.0833;
    }else if(fromHeight==="inch" && toHeight==="inch"){
        userOutput.value = userInput.value
    }

    // validating for feet 

    if(fromHeight==="ft" && toHeight==="m"){
        userOutput.value = (userInput.value)/3.28;
    }else if(fromHeight==="ft" && toHeight==="cm"){
        userOutput.value = (userInput.value)*30.48;
    }else if(fromHeight==="ft" && toHeight==="inch"){
        userOutput.value = (userInput.value)/0.0833;
    }else if(fromHeight==="ft" && toHeight==="ft"){
        userOutput.value = userInput.value;
    }
}
