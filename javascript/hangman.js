class Hangman {
  constructor(words) {  
    //THE STATE OF THE GAME IS IN THIS OBJECT
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = [];  // array
    this.guessedLetters = ""  //string
    this.errorsLeft = 10  //initial value
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
    for (let i=0; i<=this.letters.length; i++) {
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
    this.errorsLeft --

  }

  checkGameOver() {
    if (this.errorsLeft < 1){
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

    // ... your code goes here
  });
}


  // React to user pressing a key
document.addEventListener('keydown', event => {
  // The same as:
  // document.keydown = event => {
    if (hangman.secretWord.includes(event.key)) {
      // add it to correct letters
      //addCorrectLetter(correctLetter)
      let index = hangman.secretWord.indexOf(event.key)
      hangmanCanvas.writeCorrectLetter(index)
    } else {
      //addWrongLetter(wrongLetter)
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)

            // add it to wrong letters

    }
  });
