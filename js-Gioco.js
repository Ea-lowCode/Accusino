// creazione di tutte le card del gioco

function createGameCards(totalCards = 8){

    const cardGame = document.querySelector('.card-game');

    for(let i = 0; i < totalCards; i++){
        // Div della card
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.id = 'card' + (i+1);

        // H1 titolo card
        const titleCard = document.createElement('h1');
        titleCard.textContent = `Mano ${i+1}`;

        // Div container dei titoli della tabella
        const divTitleGrid = document.createElement('div');
        divTitleGrid.className = 'grid-container';

        // P Giocatori
        const pGiocatori = document.createElement('p');
        pGiocatori.className = 'label-S';
        pGiocatori.textContent = 'Giocatori';

        // P Dichiarate
        const pDichiarate = document.createElement('p');
        pDichiarate.className = 'label-S center';
        pDichiarate.textContent = 'Dichiarate';

        // P Prese
        const pPrese = document.createElement('p');
        pPrese.className = 'label-S center';
        pPrese.textContent = 'Prese';

        // P Punti
        const pPunti = document.createElement('p');
        pPunti.className = 'label-S center';
        pPunti.textContent = 'Punti';

        // Div per ospitare la funzione che genera gli input
        const divFunction = document.createElement('div');
        divFunction.className = 'grid-container-rows';

        // Inserisco la funzione da chiamare, dandogli come argomento il div che ho appena creato, altrimenti non funziona perchè il DOM non ha già caricato l'HTML con la classe su cui querySelector
        createGridRows(divFunction, 5);

        // A bottone avanti
        const buttonAvanti = document.createElement('a');
        buttonAvanti.className = 'margin-top-16 button-disabled';
        buttonAvanti.textContent = 'Avanti';

        // Blocco assemblato
        cardGame.appendChild(divCard);
            divCard.appendChild(titleCard);
            divCard.appendChild(divTitleGrid);
                divTitleGrid.appendChild(pGiocatori);
                divTitleGrid.appendChild(pDichiarate);
                divTitleGrid.appendChild(pPrese);
                divTitleGrid.appendChild(pPunti);
        divCard.appendChild(divFunction);
        divCard.appendChild(buttonAvanti);
    }
};

createGameCards(8);

//il blocco sarà con questa struttura. ancora non ho messo il feedback
//<div class="card">
//                <h1>Mano 1</h1>
//                <div class="grid-container">
//                    <p class="label-S"> Giocatori</p>
//                    <p class="label-S center"> Dichiarate</p>
//                    <p class="label-S center"> Prese</p>
//                    <p class="label-S center"> Punti</p>
//                </div>
//                <div class="grid-container-rows">
//                    <!-- components/Grid/GridRow/index.js -->
//                </div>
//                <div class="error-feedback">
//                <span class="material-icons error">error</span>
//                <p>Almeno un giocatore deve sbagliare</p>
//                </div>
//                
//                <a class="margin-top-16 button-disabled" id="next-step-button">Avanti</a>
//        </div>


// creazione delle row con input di ogni partita
function createGridRows(container,totalPlayers = 5) {

    for (let i = 0; i < totalPlayers; i++) {
        // Contenitore della riga
        const rowContainer = document.createElement('div');
        rowContainer.className = 'grid-container input-game';

        // p player
        const pPlayer = document.createElement('p');
        pPlayer.className = 'body-L';
        pPlayer.id = 'player' + (i + 1);
        pPlayer.textContent = 'Nome giocatore';

        // input dichiarate
        const inputDichiarate = document.createElement('input');
        inputDichiarate.type = 'number';
        inputDichiarate.placeholder = 'D';
        inputDichiarate.className = 'number';
        inputDichiarate.min = 0;

        // input prese
        const inputPrese = document.createElement('input');
        inputPrese.type = 'number';
        inputPrese.placeholder = 'P';
        inputPrese.className = 'number';
        inputPrese.min = 0;

        // Crea il div readonly
        const divReadonly = document.createElement('div');
        divReadonly.className = 'number-readonly';
        divReadonly.textContent = '- -';

        // Assembla il blocco
        rowContainer.appendChild(pPlayer);
        rowContainer.appendChild(inputDichiarate);
        rowContainer.appendChild(inputPrese);
        rowContainer.appendChild(divReadonly);

        // rowContainer sarà = 
        //     <div class="grid-container input-game">
        //        <p class="body-L" id="player2">Nome giocatore</p>
        //        <input type="number" placeholder="D" class="number" min="0">
        //        <input type="number" placeholder="P" class="number" min="0">
        //        <div class="number-readonly">- -</div>
        //     </div>

        // Aggiungi il blocco al container
        container.appendChild(rowContainer);
    }
};

// controllo sugli input per abilitare o meno il bottone primario

function checkInputs(card){
    const inputs = card.querySelectorAll('input.number');
    const button = card.querySelector('a');
    let allFilled = true;

    for (let i = 0; i < inputs.length; i++ ){
        const inputValue = inputs[i].value.trim();
        if (inputValue === '' || isNaN(inputValue)) {
            allFilled = false;
            break;
        } else {allFilled = true}
    };

    if(allFilled){
        button.classList.remove('button-disabled');
    } else {
        button.classList.add('button-disabled');
    };

}

// scrivo una funzione per aggiungere un event listeners a tutti gli input di ogni card
function addListenersToAllCards() {
    const cards = document.querySelectorAll('.card');

    cards.forEach()

}

addListenersToAllCards();