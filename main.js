let count = 0
let playerOneScore = 0
let playerTwoScore = 0
let playerText = document.querySelector('#player-text')
let btn = document.querySelector('.buttons')
let scoreOne = document.querySelector('#pl1')
let scoreTwo = document.querySelector('#pl2')
let first
let second
let reset = document.querySelector('#reset')
let winnerText = document.querySelector('#winner-text')

function pickWinner (firstChoice, secondChoice) {
    if (firstChoice == 'Rock' && secondChoice == 'Scissors' || firstChoice == 'Paper' && secondChoice == 'Rock' || firstChoice == 'Scissors' && secondChoice == 'Paper'){
        // player one wins
        winnerText.textContent = 'Player One Wins!!'
        scoreOne.innerText ++
        playerText.innerText = 'Player 1'
        count = 0
    } else if(firstChoice == 'Scissors' && secondChoice == 'Rock' || firstChoice == 'Rock' && secondChoice == 'Paper' || firstChoice == 'Paper' && secondChoice == 'Scissors'){
        // player two wins
        winnerText.textContent = 'Player Two Wins!!'
        scoreTwo.innerText ++
        playerText.innerText = 'Player 1'
        count = 0
    } else if (firstChoice == secondChoice){
        // tie/draw
        // console.log('tie')
        count = 0
        playerText.innerText = 'Player 1'
        winnerText.textContent = `It's a tie`
    }
}


btn.addEventListener('click', (e)=>{
    // console.log(typeof(e.target.textContent))
    count ++
    // console.log(count)
    if (count == 1){
        first = e.target.textContent
        playerText.innerText = 'Player 2'
        console.log(first)
    } else if (count == 2){
        second = e.target.textContent
        console.log(second)
        pickWinner(first, second)
    }
    
    // console.log(count)
    // let firstChoice = e.target.innerText
    // console.log(firstChoice)
    // playerText.innerText = 'Player 2'
    
})

reset.addEventListener('click', (e) => {
    count = 0
    scoreOne.innerText = 0
    scoreTwo.innerText = 0
    playerText.innerText = 'Player 1'
    winnerText.textContent = ''
})



/**
 * @CHANGE_SCORES 
 * playerOneScore += 1
 * document.querySelector('#pl1').innerText = playerOneScore
*/
