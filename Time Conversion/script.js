let inputSelection = document.getElementById("inputSelection"),
outputSelection = document.getElementById("outputSelection"),
userInput = document.getElementById("userInput"),
userOutput = document.getElementById("userOutput");
let fromTime;
let toTime;

// adding events 
inputSelection.addEventListener("change",changeTime);
outputSelection.addEventListener("change",changeTime);
userInput.addEventListener("keyup",changeTime);
userOutput.addEventListener("change",changeTime);

function changeTime(){

    fromTime = inputSelection.value;
    toTime = outputSelection.value;
    // validating for minutes 
    if(fromTime==="m" && toTime==="s"){
        userOutput.value = (userInput.value)*60;
    } if(fromTime==="m" && toTime==="h"){
        userOutput.value = (userInput.value)/60;
    } if(fromTime==="m" && toTime==="m"){
        userOutput.value = userInput.value
    }

    // validating for seconds
    if(fromTime==="s" && toTime==="m"){
        userOutput.value = (userInput.value)/60
    }else if(fromTime==="s" && toTime==="h"){
        userOutput.value = (userInput.value)/3600;
    }else if(fromTime==="s" && toTime==="s"){
        userOutput.value = userInput.value
    }
    
    // validating for hours 

    if(fromTime==="h" && toTime==="m"){
        userOutput.value = (userInput.value)/60;
    }else if(fromTime==="h" && toTime==="s"){
        userOutput.value = (userInput.value)*3600;
    }else if(fromTime==="h" && toTime==="h"){
        userOutput.value = userInput.value;
    }
}
