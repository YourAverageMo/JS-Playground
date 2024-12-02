const choices = [`rock`, `paper`,`scissors`]
const playerDisplay = document.getElementById(`playerDisplay`)
const computerDisplay = document.getElementById(`computerDisplay`)
const resultDisplay = document.getElementById(`resultDisplay`)

function playGame(playerChioce) {
    resultDisplay.classList.remove(`greenText`, `redText`)

    const computerChoice = choices[Math.floor(Math.random() * 3)]

    console.log(computerChoice);
    let result = ``

    if (playerChioce === computerChoice) {
        result = `ITS A TIE`
    }
    else {
        switch (playerChioce) {
            case `rock`:
                result = (computerChoice === `scissors`) ? `YOU WIN` : `YOU LOSE`
                break;
            case `paper`:
                result = (computerChoice === `rock`) ? `YOU WIN` : `YOU LOSE`
                break;
            case `scissors`:
                result = (computerChoice === `paper`) ? `YOU WIN` : `YOU LOSE`
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChioce}`
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`
    resultDisplay.textContent = result

    switch (result) {
        case `YOU WIN`:
            resultDisplay.classList.add(`greenText`)
            break;
        case `YOU LOSE`:
            resultDisplay.classList.add(`redText`)
            break;
    }
}