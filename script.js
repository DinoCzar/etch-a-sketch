const userInput = 4;

function createGrid() {
    for (let i = 0; i < userInput; i++) {
        const container = document.querySelector('#container');
        const row = document.createElement('div');
        row.setAttribute('id', 'row');
        container.appendChild(row);
        for (let i = 0; i < userInput; i++) {
            const box = document.createElement('div');
            box.setAttribute('id', 'box');
            row.appendChild(box);
        }
    }
}

createGrid();