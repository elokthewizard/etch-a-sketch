function createGrid() {
    const container = document.createElement('div');
    container.id = 'main';
    container.className = 'container';

    for (let i = 0; i < 16; i++) {
        const row = container.appendChild(document.createElement('div'));
        row.className = 'row';
        row.id = `row_${i}`
        
        for (let k = 0; k < 16; k++){
            const box = row.appendChild(document.createElement('div'));
            box.className = 'box';
        };
            
    };

    document.body.appendChild(container);
};

document.addEventListener('DOMContentLoaded', createGrid());

let head = document.getElementsByTagName('HEAD')[0];
let link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'style.css';

head.appendChild(link);