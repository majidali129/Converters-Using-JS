let inputSelection = document.getElementById("inputSelection"),
outputSelection = document.getElementById("outputSelection"),
userInput = document.getElementById("userInput"),
userOutput = document.getElementById("userOutput");
let fromArea;
let toArea;

// adding events 
inputSelection.addEventListener("change",changeArea);
outputSelection.addEventListener("change",changeArea);
userInput.addEventListener("keyup",changeArea);
userOutput.addEventListener("change",changeArea);

function changeArea(){
    fromArea = inputSelection.value;
    toArea = outputSelection.value;

    if(fromArea==="sm" && toArea==="sm"){
        userOutput.value = userInput.value
    }else if(fromArea==="sm" && toArea==="skm"){
        userOutput.value = (userInput.value)/1000000;
    }else if(fromArea==="sm" && toArea==="smm"){
        userOutput.value = (userInput.value)/0.0000010000;
    }else if(fromArea==="sm" && toArea==="sh"){
        userOutput.value = (userInput.value)*0.00010000;
    }else if(fromArea==="sm" && toArea==="sft"){
        userOutput.value = (userInput.value)*10.764;
    }else if(fromArea==="skm" && toArea==="skm"){ // skm
        userOutput.value = userInput.value
    }else if(fromArea==="skm" && toArea==="sm"){
        userOutput.value = (userInput.value)*1000000;
    }else if(fromArea==="skm" && toArea==="smm"){
        userOutput.value = (userInput.value)*1000000000000;
    }else if(fromArea==="skm" && toArea==="sh"){
        userOutput.value = (userInput.value)*100;
    }else if(fromArea==="skm" && toArea==="sft"){
        userOutput.value = (userInput.value)*10764000
    }else if(fromArea==="smm" && toArea==="smm"){  // smm
        userOutput.value = userInput.value
    }else if(fromArea==="smm" && toArea==="sm"){
        userOutput.value = (userInput.value)*0.0000010000;
    }else if(fromArea==="smm" && toArea==="skm"){
        userOutput.value = (userInput.value)/1000000000000
    }else if(fromArea==="smm" && toArea==="sh"){
        userOutput.value = (userInput.value)*0.00000000010000;
    }else if(fromArea==="smm" && toArea==="sft"){ 
        userOutput.value = (userInput.value)*0.000010764;
    }else if(fromArea==="sh" && toArea==="sh"){   // sh
        userOutput.value = userInput.value
    }else if(fromArea==="sh" && toArea==="skm"){
        userOutput.value = (userInput.value)/100
    }else if(fromArea==="sh" && toArea==="smm"){
        userOutput.value = (userInput.value)/0.00000000010000
    }else if(fromArea==="sh" && toArea==="sft"){
        userOutput.value = userInput.value/0.000009290304
    }else if(fromArea==="sh" && toArea==="sm"){
        userOutput.value = (userInput.value)/0.00010000
    }else if(fromArea==="sft" && toArea==="sm"){ // sft
        userOutput.value = (userInput.value)/10.764
    }else if(fromArea==="sft" && toArea==="skm"){
        userOutput.value = (userInput.value)/10764000
    }else if(fromArea==="sft" && toArea==="smm"){
        userOutput.value = (userInput.value)/0.000010764
    }else if(fromArea==="sft" && toArea==="sh"){
        userOutput.value = (userInput.value)*0.000009290304;
    }else if(fromArea==="sft" && toArea==="sft"){
        userOutput.value = userInput.value
    }
}

let x = parseInt("+18",16);
console.log(x)