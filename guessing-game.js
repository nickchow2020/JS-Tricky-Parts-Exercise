function guessingGame(guess) {
    const guessNum = Math.floor(Math.random() * 99)
    return function(){
        if(guessNum === guess){
            console.log("You win! You found 70 in 3 guesses!" )
        }else if(guess > guessNum){
            console.log(`${guess} is too high!`)
        }else{
            console.log(`${guess} is too low!`)
        }
    }
}

module.exports = { guessingGame };
