// components/Grid/GridRows/index.js -> E' bene avere una struttura solida anche delle cartelle per capire cosa fa un file js e con cosa "opera"
// [la struttura che ho usato non è uno standard, è giusto per fare un esempio]
function createGridRows(totalPlayers = 5) {

    const gridContainer = document.querySelector('.grid-container-rows');

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
        gridContainer.appendChild(rowContainer);
    }
};

createGridRows(5);
// createGridRows(); <-- posso scriverlo anche senza il 5, perché nella funzione ho definito un valore di default => totalPlayers = 5