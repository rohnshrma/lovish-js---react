function chooseWord(words) {
    return words[Math.floor(Math.random() * words.length)]
}

// console.log(chooseWord(["apple","kiwi","cherry","papaya"])
// )

function displayWord(word, guessedLetters) {
    let display = ''
    for (var i = 0; i < word.length; i++) {
        var letter = word[i]
        if (guessedLetters.includes(letter)) {
            display += letter + ' '
        } else {
            display += "_ ";
        }
    }
    return display

}

// console.log(displayWord("apple",["p"]))

function checkLetter(word, guessedLetter) {
    return word.includes(guessedLetter);
}

// checkLetter("apple","e")



const words = ['apple', 'taco', 'burger', 'tower', 'health']
const word = chooseWord(words)
// console.log(word);
let guessedLetters = []
var attempts = 6

while (attempts > 0) {
    var guess = prompt('Guess a letter : ').toLowerCase()

    if(guessedLetters.includes(guess)){
        alert("You already guessed that letter.");
        continue;
    }
    guessedLetters.push(guess);

    if(checkLetter(word,guess)){
        alert("Correct Guess!");
    }else{
        attempts--;
        alert(`Wrong Guess! ${attempts} attempts are left.`);
    }

    alert(`Word : ${displayWord(word,guessedLetters)} `);

    if(word === displayWord(word,guessedLetters).replace(/ /g,"")){
        alert(`Congratulations you guessed the word correctly!`);
        break
    }

}

if (attempts===0){
    alert(`you ran out of attempts , the correct word was ${word}`)
}