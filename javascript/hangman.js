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
    if (this.errorsLeft < 1) {
      return true
    } else {
      return false
    }
  }

  checkWinner() {
    //sort the array sort the string then check it
    if (this.guessedLetters.length == this.secretWord.length) {
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
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()

  });
}


// React to user pressing a key
document.addEventListener('keydown', event => {   // The same as: document.keydown = event => {


  //hangman.checkIfLetter(keyCode)
  // if (hangman.checkClickedLetters(event.key)) {
  //   hangman.letters.push(event.key)
  //   console.log('if ' + hangman.letters)
  // } else {
  //   // don't do anything
  //   console.log('else ' + hangman.letters)    
  // }

  if (hangman.secretWord.includes(event.key)) {

    if (hangman.checkClickedLetters(event.key)) {
      let index = hangman.secretWord.indexOf(event.key)
      hangmanCanvas.writeCorrectLetter(index)
      hangman.letters.push(event.key)
      console.log('if ' + hangman.letters)
    } else if (!hangman.checkClickedLetters(event.key)){
      console.log('else ' + hangman.letters)    
    }
  } else {

    if (hangman.checkClickedLetters(event.key)) {
      hangman.addWrongLetter(event.key)
      let errorsLeft = hangman.errorsLeft
      console.log(errorsLeft)  
      hangmanCanvas.writeWrongLetter(event.key, errorsLeft)
      hangmanCanvas.drawHangman(errorsLeft)
      hangman.letters.push(event.key)
      console.log('if ' + hangman.letters)
    } else if (!hangman.checkClickedLetters(event.key)){
      console.log('else ' + hangman.letters)    
    }

  }
});