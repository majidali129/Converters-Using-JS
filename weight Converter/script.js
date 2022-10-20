let inputSelection = document.getElementById("inputSelection"),
outputSelection = document.getElementById("outputSelection"),
userInput = document.getElementById("userInput"),
userOutput = document.getElementById("userOutput");
let fromWeight;
let toWeight;

userInput.addEventListener("keyup",changeWeight);
inputSelection.addEventListener("change",changeWeight);
outputSelection.addEventListener("change",changeWeight);
userOutput.addEventListener("change",changeWeight);

function changeWeight(){
    fromWeight = inputSelection.value;
    toWeight = outputSelection.value;

    // validating for ponds 

    if(fromWeight==="ponds" && toWeight==="ounces"){
        userOutput.value = (userInput.value)*16;
    }else if(fromWeight==="ponds" && toWeight==="kg"){
        userOutput.value = (userInput.value)/2.2046;
    }else if(fromWeight==="ponds" && toWeight==="g"){
        userOutput.value = (userInput.value)/0.0022046;
    }else if(fromWeight==="ponds" && toWeight==="stones"){
        userOutput.value = (userInput.value)/0.071429;
    }else if(fromWeight==="ponds" && toWeight==="ponds"){
        userOutput.value = userInput.value

    }

    // validating for kg 
    if(fromWeight==="kg" && toWeight==="ponds"){
        userOutput.value = (userInput.value)*2.2046;
    }else if(fromWeight==="kg" && toWeight==="g"){
        userOutput.value = (userInput.value)*1000;
    }else if(fromWeight==="g" && toWeight==="kg"){
        userOutput.value = (userInput.value)/1000;
    }
    else if(fromWeight==="g" && toWeight==="g"){
        userOutput.value = userInput.value;
    }else if(fromWeight==="kg" && toWeight==="kg"){
        userOutput.value = userInput.value;
    }else if(fromWeight==="g" && toWeight==="ponds"){
        userOutput.value = (userInput.value)*0.0022046;
    }
}

