let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guess');
const guessSlot = document.querySelector('.Guessess');
const remaining = document.querySelector('.result');
const loworhi = document.querySelector('.loworhi');
const startover = document.querySelector('#startover')

const p = document.createElement('p');

let prevGuess = [];
let numguess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
       e.preventDefault();
       const guess = parseInt(userInput.value);
       console.log(guess);
       validateGuess(guess);

        
    });
}


function validateGuess (guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }else if (guess < 1){
        alert('please enter a number more than 1')
    } else if(guess > 100 ){
        alert('please enter a number less than 100')
    }  else {
        prevGuess.push(guess)
        if(numguess===10){
            displayGuess(guess)
            displayMessage(`game over, random number was ${randomNumber}`)
            endgame(guess)
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }

    }

}

function checkGuess (guess) {
    if (guess === randomNumber) {
        displayMessage('you guessed it right')
        endgame()       
    } else if (guess > randomNumber){
        displayMessage('number is too high')
    } else if (guess < randomNumber){
        displayMessage('number is too low')
}
}
function displayGuess (guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numguess++;
    remaining.innerHTML= `${11 - numguess}`
}

function displayMessage (message) {
    loworhi.innerHTML = ` <h2> ${message}</h2> `
}

function endgame () {
    userInput.value = '';
    userInput.setAttribute('disabled', '' );
    p.classList.add('button');
    p.innerHTML= `<h2 id= "newgame">Start new game </h2>`;
    startover.appendchild(p);
    playGame= false;
    newgame()

}

function newgame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startover.removeChild(p);
  
      playGame = true;
    });

}


