const templatePlayer = document.getElementById('player-input-template');
const playerList = document.getElementById('player-list');
let playerCount = 0;

function addPlayerInput() {
    playerCount ++;
    const clone = templatePlayer.content.cloneNode(true);
    const input = clone.querySelector("input");
    input.id = `player${playerCount}`;
    playerList.appendChild(clone);
    input.addEventListener("input", () => {
        sessionStorage.setItem(input.id, input.value)
    });
}


addPlayerInput();
addPlayerInput();
addPlayerInput();
addPlayerInput();
addPlayerInput();

const startButton = document.getElementById("startButton");

function checkInputs(){
    const inputs = playerList.querySelectorAll('input');
    const allFilled = [...playerList.querySelectorAll("input")].every(input => input.value.trim() !== "");
    
    if (allFilled){
        startButton.classList.remove('button-disabled');
    } else {
        startButton.classList.add('button-disabled');
    }

    inputs.forEach (input => {
        if (input.value.trim() !== '') {
            input.classList.add('input-complete');
        } else {
            input.classList.remove('input-complete');
        }
    });
}

playerList.addEventListener("input", checkInputs);