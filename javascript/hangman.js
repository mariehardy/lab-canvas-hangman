class Hangman {
  constructor(words) {
    //THE STATE OF THE GAME IS IN THIS OBJECT
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []; // array
    this.guessedLetters = "" //string
    this.errorsLeft = 10 //initial value
  }

  pickWord() {
    let secretWord = this.words[Math.floor(Math.random() * this.words.length)]
    return secretWord
  }

  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    for (let i = 0; i <= this.letters.length; i++) {
      if (letter === this.letters[i]) {
        return false
      }
    }
    return true

  }

  addCorrectLetter(correctLetter) {
    this.guessedLetters += correctLetter

    //check if the user won

    // for (i=0; i <= this.secretWord.length; i++) {
    //   for (j=0; i <= this.guessedLetters.length; j++) {
    //     if (this.secretWord[i] === this.guessedLetters[j]) {

    //     }
    // }

  }

  addWrongLetter(wrongLetter) {
    if (this.errorsLeft >= 1) {
      this.errorsLeft = this.errorsLeft - 1
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true
    } else {
      return false
    }
  }

  checkWinner() {
    //sort the array sort the string then check it
    if (this.guessedLetters.length === this.secretWord.length) {
      return true
    } else {
      return false
    }
  }
}


let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()

  });
}


// React to user pressing a key
document.addEventListener('keydown', event => {   // The same as: document.keydown = event => {


  // check if it is even a letter
  if (!hangman.checkIfLetter(event.keyCode)) {
    alert('not a letter')
    return
  }
  // check if the letter has been used before
  if (!hangman.checkClickedLetters(event.key)){
    alert("please don't click the same letter again")  
    return
  }


  
  // is it a correct letter ? ...
  if (hangman.secretWord.includes(event.key)) {
      hangman.addCorrectLetter(event.key)
      console.log('guessedLetterStr ' + hangman.guessedLetters)
      let index = hangman.secretWord.indexOf(event.key)
      hangmanCanvas.writeCorrectLetter(index)
      hangman.letters.push(event.key)
      console.log('hangman.letters after correct letter ' + hangman.letters)
    } else {
      hangman.addWrongLetter(event.key)
      let errorsLeft = hangman.errorsLeft
      console.log(errorsLeft)  
      hangmanCanvas.writeWrongLetter(event.key, errorsLeft)
      hangmanCanvas.drawHangman(errorsLeft)
      hangman.letters.push(event.key)
      console.log('hangman.letters after wrong letter ' + hangman.letters)
    }



    if (hangman.checkGameOver()) {
      hangmanCanvas.gameOver()
    }
    if (hangman.checkWinner()) {
      hangmanCanvas.winner()
    }
  


  
});