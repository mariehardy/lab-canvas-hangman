class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
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
      //console.log(x)
      //console.log(endOfLine)
    }
  }

  writeCorrectLetter(index) {

    // checkIfLetter(keyCode)
    // checkClickedLetters(letter)

    // write the letter on which the user has just clicked
    let letterToWrite = this.secretWord[index]

    this.context.fillstyle= "orange"
    this.context.font = "30px Arial"
    let offset = index * 52
    this.context.fillText(letterToWrite, 200 + offset, 500)

    // checking if the letter was not already clicked

  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.fillstyle= "red"
    this.context.font = "30px Arial"
    let offset = -(30 * errorsLeft)  // (in reverse)
    this.context.fillText(letter, 700 + offset, 50)  
  }

  drawHangman(errorsLeft) {
    if (errorsLeft === 9) {
      this.context.fillstyle= "black"
      this.context.beginPath()
      this.context.moveTo(80, 500);
      this.context.lineTo(160, 500);
      this.context.stroke();
    } else if (errorsLeft === 8) {
      this.context.fillstyle= "black"
      this.context.beginPath()
      this.context.moveTo(80, 500);
      this.context.lineTo(120, 460);
      this.context.stroke();
    } else if (errorsLeft === 7) {
      this.context.fillstyle= "black"
      this.context.beginPath()
      this.context.moveTo(160, 500);
      this.context.lineTo(120, 460);
      this.context.stroke();
    } else if (errorsLeft === 6) {
      this.context.fillstyle= "black"
      this.context.beginPath()
      this.context.moveTo(120, 460);
      this.context.lineTo(120, 120);
      this.context.stroke();
    } else if (errorsLeft === 5) {
      this.context.fillstyle= "black"
      this.context.beginPath()
      this.context.moveTo(120, 120);
      this.context.lineTo(300, 120);
      this.context.stroke();
    } else if (errorsLeft === 4) {
      this.context.fillstyle= "black"
      this.context.beginPath()
      this.context.moveTo(300, 120);
      this.context.lineTo(300, 160);
      this.context.stroke();
    } else if (errorsLeft === 3) {
      this.context.beginPath()
      var radius = 30 // Arc radius
      var startAngle =  0 // Start point on circle
      var endAngle = Math.PI * 2 // End point on circle
      // True reverses the other direction 
      this.context.arc(300, 190, radius, startAngle, endAngle, false)
      this.context.stroke()
    } else if (errorsLeft === 2) {
      this.context.fillstyle= "black"
      this.context.beginPath()
      this.context.moveTo(300, 220);
      this.context.lineTo(300, 350);
      this.context.stroke();
    } else if (errorsLeft === 1) {
      this.context.fillstyle= "black"
      this.context.beginPath()
      this.context.moveTo(300, 350);
      this.context.lineTo(345, 390);
      this.context.stroke();
    } else if (errorsLeft === 0) {
      this.context.fillstyle= "black"
      this.context.beginPath()
      this.context.moveTo(300, 350);
      this.context.lineTo(265, 390);
      this.context.stroke();
    }
  }

  gameOver() {
    // this.context.clearRect(0, 0, 800, 1200)
    let img = new Image();
    img.src = "../images/gameover.png"
    this.context.drawImage(img, 100, 300, 570, 240);

  }

  winner() {
    // this.context.clearRect(0, 0, 800, 1200)
    let img = new Image();
    img.src = "../images/awesome.png"
    this.context.drawImage(img, 100, 300, 372, 618);
  }
}