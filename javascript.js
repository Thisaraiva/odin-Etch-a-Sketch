const containerSize = 960; // Tamanho fixo do container
const container = document.querySelector('.container');
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let input;
    let isValid = false;

    while (!isValid) {
        // Solicita o input do usuário
        input = prompt('How many divs do you want? (Maximum 100) (Inform numXnum, e.g., 16x16)');

        // Se o usuário cancelar ou não digitar nada, encerra o loop
        if (input === null || input.trim() === '') {
            alert('Input canceled or empty. Please try again.');
            continue;
        }

        // Divide o input no caractere 'x'
        const grade = input.split('x');

        // Verifica se o input tem exatamente dois valores (formato numXnum)
        if (grade.length !== 2) {
            alert('Invalid format. Please use the format numXnum (e.g., 16x16).');
            continue;
        }

        // Converte os valores para números
        const num1 = parseInt(grade[0], 10);
        const num2 = parseInt(grade[1], 10);

        // Verifica se os valores são números válidos e <= 100
        if (isNaN(num1) || isNaN(num2)) {
            alert('Please enter valid numbers.');
            continue;
        } else if (num1 > 100 || num2 > 100) {
            alert('Each number must be less than or equal to 100.');
            continue;
        }

        // Se passou todas as validações, sai do loop
        isValid = true;

        // Remove a grade existente
        container.innerHTML = '';

        // Cria a nova grade
        createGrid(num1, num2);
    }
});

function createGrid(rows, cols) {
    const boxes = rows * cols;
    const boxSize = containerSize / Math.max(rows, cols);

    for (let i = 0; i < boxes; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;

        // Efeito de hover com cor aleatória e escurecimento progressivo
        let opacity = 0.1;
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = getRandomColor();
            if (opacity < 1) {
                opacity += 0.1;
                div.style.opacity = opacity;
            }
        });

        container.appendChild(div);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
