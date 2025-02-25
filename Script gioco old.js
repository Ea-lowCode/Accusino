function updatePlayerNames(){
    for (let i = 1; i <=5; i++) {
        const playerName = sessionStorage.getItem(`player${i}`);
        if (playerName){
            document.getElementById(`player${i}`).innerText = playerName
        }
    }
}

window.onload = updatePlayerNames();

const nextStepButton = document.getElementById("next-step-button");
const gameTable = document.getElementById('game-table-1');

function checkInputsGame1(){
    const titleCard = gameTable.querySelector('h1').textContent.trim();
    const numberTitle = parseInt(titleCard.replace(/\D/g, ''), 10);
    const inputs = gameTable.querySelectorAll('input');
    const allFilled = [...inputs].every(input => input.value.trim() !== '');

    if(allFilled && sum !== numberTitle){
        nextStepButton.classList.remove('button-disabled');
    } else if (allFilled && sum === numberTitle) {
        nextStepButton.classList.add('button-disabled');
    } else {
        nextStepButton.classList.add('button-disabled');
    }

    inputs.forEach (input => {
        if (input.value.trim() !== '') {
            input.classList.add('input-complete');
        } else{
            input.classList.remove('input-complete');
        }
    });
}

gameTable.addEventListener("input", checkInputsGame1);


function updateScore (){
    const gameTable1 = document.querySelectorAll(".grid-container.input-game");
    gameTable1.forEach(grid => {
        const inputGame1 = grid.querySelectorAll('input');
        const displayScore = grid.querySelector('.number-readonly');
        const titleCard = gameTable.querySelector('h1').textContent.trim();
        const numberTitle = parseInt(titleCard.replace(/\D/g, ''), 10);
        
            inputGame1.forEach(input => {
                input.addEventListener('input', function() {
                    const valInput1 = inputGame1[0].value.trim();
                    const valInput2 = inputGame1[1].value.trim();
                    calculateSum();
                    errorSum();

                    if (valInput1 === valInput2 && valInput1 !== '' && valInput2 !== '') {
                        displayScore.classList.add('success');
                        displayScore.classList.remove('wrong');
                        displayScore.textContent = Number(valInput2)+ Number(numberTitle);
                    }
                    else if (valInput1 !== valInput2 && valInput1 !== '' && valInput2 !== '') {
                        displayScore.classList.add('wrong');
                        displayScore.classList.remove('success');
                        displayScore.textContent = Number(valInput2);
                    }
                    else {
                        displayScore.classList.remove('wrong');
                        displayScore.classList.remove('success');
                        displayScore.textContent = "- -";
                    }
                })
            })
    });
}

updateScore();

const infoIcon = document.getElementById('info-icon');
infoIcon.addEventListener('click', function() {
    alert('Mara smettila di vedere i punteggi in anticipo');
})

let sum = 0 ;
function calculateSum() {
    sum = 0;
    const firstInput = document.querySelectorAll(".grid-container.input-game input:first-of-type");
    
    firstInput.forEach(input => {
        const inputValue = Number(input.value.trim());
        sum = sum + inputValue;
    })
    return sum;
}

function errorSum(){
    const titleCard = gameTable.querySelector('h1').textContent.trim();
    const numberTitle = parseInt(titleCard.replace(/\D/g, ''), 10);
    const firstInputs = document.querySelectorAll(".grid-container.input-game input:first-of-type");
    const allFilledFirst = [...firstInputs].every(input => input.value.trim() !== '');
    const errorFeedback = document.querySelector('.error-feedback');

    if (allFilledFirst && sum === numberTitle ) {
        errorFeedback.style.display = "Flex";
    } else {
        errorFeedback.style.display = "none";
    }

}