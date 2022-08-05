const randomNumber = Math.ceil(Math.random() * 100)
console.log(randomNumber)
alert('Wanna play?')

let guessedNumber = parseInt(prompt('Guess the number:'))
console.log('You guessed' , guessedNumber , 'Try again!')
let attempts = 1

while (guessedNumber !== randomNumber) {
    attempts++
    if (guessedNumber < randomNumber) {
        guessedNumber = parseInt(prompt('Try a higher number:'))
        console.log('You guessed' , guessedNumber , 'Try again!')
    } else {
        guessedNumber = parseInt(prompt('Try a lower number:'))
        console.log('You guessed' , guessedNumber , 'Try again!')
    }
}
alert(`Congratulations! You tried guessing the number ${attempts} time(s).`)
