class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200)
    this.drawLines()
  }

  drawLines() {
    let x = 200
    this.context.strokeStyle = 'black'
    for (let i = 0; i < this.secretWord.length; i++) {
      let endOfLine = x + 30
      this.context.strokeStyle = 'black'
      this.context.beginPath()
      this.context.moveTo(x, 500);
      this.context.lineTo(endOfLine, 500);
      this.context.stroke();
      x += 50
      console.log(x)
      console.log(endOfLine)
    }
  }

  writeCorrectLetter(index) {

    // checkIfLetter(keyCode)
    // checkClickedLetters(letter)

    // write the letter on which the user has just clicked
    let letterToWrite = this.secretWord[index]

    this.context.fillstyle= "orange"
    this.context.font = "30px Arial"
    let offset = index * 30
    this.context.fillText(letterToWrite, 200 + offset, 500)

    // checking if the letter was not already clicked

  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}