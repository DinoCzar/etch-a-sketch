const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    const userInput = prompt("Enter a number");
    if (userInput < 100) {
        for (let i = 0; i < userInput; i++) {
            const container = document.querySelector('#container');
            const row = document.createElement('div');
            row.setAttribute('id', 'row');
            container.appendChild(row);
            for (let i = 0; i < userInput; i++) {
                const box = document.createElement('div');
                box.setAttribute('id', 'box');
                box.addEventListener('mouseover', (e) => {
                    e.target.style.background = 'red';
                });
                row.appendChild(box);
            }
        }
    } else {
        return alert("Please enter a number less than 100");
    }
});

