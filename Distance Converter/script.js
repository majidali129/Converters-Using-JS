// console.log(window)
let selection = document.getElementById("inputOption");
let resultant = document.getElementById("outputOption");
let userInput = document.getElementById("userInput");
let userOutput = document.getElementById("userOutput");
let inputResult;
let outputResult;


userInput.addEventListener("keyup",checkValue);
inputOption.addEventListener("change",checkValue);
outputOption.addEventListener("change",checkValue);

function checkValue(){
    inputResult = inputOption.value;
    outputResult = outputOption.value;

    // validating the fields for meter
    if(inputResult === "meter" && outputResult === "Kilometer"){
        userOutput.value = (userInput.value)/1000
    }else if(inputResult === "meter" && outputResult === "centimeter"){
        userOutput.value = (userInput.value)*100
    }else if(inputResult==="meter" && outputResult === "meter"){
        userOutput.value = userInput.value;
    }
    // validating the fields for centimeter

    if(inputResult === "centimeter" && outputResult === "meter"){
        userOutput.value = (userInput.value)/100
    }else if(inputResult === "centimeter" && outputResult === "Kilometer"){
        userOutput.value = (userInput.value)/10000
    }else if(inputResult==="centimeter" && outputResult === "centimeter"){
        userOutput.value = userInput.value;
    }

    // validating the fields for kilometer
    
    if(inputResult === "Kilometer" && outputResult === "meter"){
        userOutput.value = (userInput.value)*1000
    }else if(inputResult === "Kilometer" && outputResult === "centimeter"){
        userOutput.value = (userInput.value)*10000
    }else if(inputResult==="Kilometer" && outputResult === "Kilometer"){
        userOutput.value = userInput.value;
    }
    
    // validating the fields for Miles
    
    if(inputResult === "Kilometer" && outputResult === "meter"){
        userOutput.value = (userInput.value)*1000
    }else if(inputResult === "Kilometer" && outputResult === "centimeter"){
        userOutput.value = (userInput.value)*10000
    }else if(inputResult==="Kilometer" && outputResult === "Kilometer"){
        userOutput.value = userInput.value;
    }
}