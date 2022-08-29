//console.log('Hello World!');

var cards = new Array();
var score = 0;
const box = document.querySelector('#allcards');
//console.log(box);
 box.addEventListener('click', (e)=> 
 {
   
   //assign alt word
   let word = e.target;
   // add to array
   cards.push(word);
   // assign id of card
   let temp = word.id;
   console.log(temp);
   let currCard = box.querySelector(`#${e.target.id}`);
   console.log(currCard);

    currCard.classList.toggle("hidden");
    setTimeout (() => {
    
    if (cards.length === 2) {
     
     if(cards[0].alt === cards[1].alt) {
      console.log("same card");
      cards = new Array();
       score+= 1;
       document.getElementById("scorer").innerHTML = "Score: " + score;
       if(score === 12) {
         document.getElementById("scorer").innerHTML = "GOOD JOB YOU WON!"
       }
      //  cards[0].classList.toggle("correct");
      //  cards[1].classList.toggle("correct");
     }
     else
     {
       
      console.log(cards[0]);
      console.log(cards[1]);
      cards[1].classList.toggle("hidden");
      cards[0].classList.toggle('hidden');
      console.log("hello");
       cards = new Array();
     }
      
   }
    
    }, 1200);
console.log("hello")
  
   //console.log(curr)
   //let cardSelect = document.query
   //allcards.innerHTML = " ";
 })


function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  showButton("PLAY");
}

// Create function to display buttons

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}
// Create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
