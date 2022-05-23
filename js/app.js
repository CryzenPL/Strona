var elementsTable = [];
var elementRandom = [];
var answer = "";
var y = 0;
var k = 0;
var point = 0;
container = document.getElementsByClassName("symbol");

for(x=0; x<container.length; x++){
    if(container[x].textContent != "DE" 
    &&container[x].textContent != "DEL" 
    &&container[x].textContent != "57-71" 
    && container[x].textContent != "89-103"){
    elementsTable[y] = container[x];
    y++
}
}

function randomElements(){
    if(elementRandom.length < elementsTable.length){
    randomNumber = Math.floor(Math.random() * elements.length) ;
    answer = elements[randomNumber][1];
    randomElement = elementsTable[randomNumber].parentNode ;
    if(elementRandom.includes(randomNumber)){
        randomElements();
    }
    else{
        randomElement.setAttribute("class","checked");
        elementRandom.push(randomNumber);
        }
        console.log(randomElement);
        console.log(randomElement);
        console.log("answer  "+answer);
    }
}


easy = document.getElementById("easy");
medium = document.getElementById("medium");
hard = document.getElementById("hard");
resetButton = document.getElementById("resetButton");

easy.addEventListener("click",gameStart);
medium.addEventListener("click",gameStart);
hard.addEventListener("click",gameStart);
resetButton.addEventListener("click",resetGame);

function resetGame(){
    for(x = 0; x < elements.length; x++){
        elementsTable[x].parentNode.classList.remove("goodAnswer");
        elementsTable[x].parentNode.classList.remove("badAnswer");
        elementsTable[x].parentNode.classList.remove("checked");
        elementsTable[x].parentNode.classList.add("grey");
        elementRandom =  [];
        point = 0;
    }
}

function gameStart(e){
    console.log(e.target.id);
    randomElements();
    document.getElementById("startButton").classList.add("hide");
    document.getElementById("resetButton").classList.remove("hide");
    document.getElementById("inputAuto").classList.remove("hide");
    statistic.innerHTML = "<h1>Liczba Punktów: "+point + "</h1>" ;
}
function checkQestion(event){
    if(event.keyCode == 13){
    
        inputAuto = document.getElementById("inputAuto").value;
        if(inputAuto == answer){
            randomElement.classList.remove("checked");
            randomElement.classList.add("goodAnswer");
            point++;
        }
        else{
            randomElement.classList.remove("checked");
            randomElement.classList.add("badAnswer");
        }
        statistic.innerHTML = "<h1>Liczba Punktów: "+point + "</h1>" ;
        randomElements();
    }
}

if(elementRandom.length == elementsTable.length){
  
}