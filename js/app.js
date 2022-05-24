var elementsTable = [];
var elementRandom = [];
var answer = "";
var y = 0;
var k = 0;
var point = 0;
var timer = 0;
var countDownDate = new Date().getTime()+120*1000;

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
        point = 0;
        statistic.innerHTML = "<h1>Liczba punktów: "+point+"</h1>";
        countDownDate =  new Date().getTime()+120*1000;
        clearInterval(timer);
        timer = setInterval(countDown,1000);
    }
    elementRandom =  [];
    randomElements();
}

function gameStart(e){
    console.log(e.target.id);
    countDownDate =  new Date().getTime()+120*1000;
    clearInterval(timer);
    timer = setInterval(countDown,1000);
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

function countDown() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
  
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<h1>" + minutes + "m " + seconds + "s</h1>";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("time").innerHTML = "Koniec Czasu";
    }
  }

if(elementRandom.length == elementsTable.length){
  
}