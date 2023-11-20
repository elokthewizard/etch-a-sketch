


let gridSize = 16
const body = document.querySelector('body')

function createGrid() {
    const container = document.createElement('div');
    container.id = 'main';
    container.className = 'container';
    document.body.appendChild(container);

    const newGrid = document.createElement('button')
    newGrid.id = 'newGrid'
    newGrid.textContent = "New grid?"
    container.appendChild(newGrid);

    for (let i = 0; i < gridSize; i++) {
        const row = container.appendChild(document.createElement('div'));
        row.className = 'row';
        row.id = `row_${i}`
        
        for (let k = 0; k < gridSize; k++){
            const box = row.appendChild(document.createElement('div'));
            box.className = 'box';
            box.id = `box_${k}`
        };
            
    };

    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'style.css'
    head.appendChild(link);

    const getRGB = function(){
        const r = Math.round(Math.random()*256);
        const b = Math.round(Math.random()*256)
        const g = Math.round(Math.random()*256)
        return `rgb(${r}, ${g}, ${b})`
    };

    let boxes = document.querySelectorAll('.box');

    boxes.forEach(function(box) {
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = getRGB();
        });

        box.addEventListener('mouseout', function() {
            // Uncomment the line below if you want to revert to the original state
            // box.classList.remove('persistent-hover');
        });
    });

    newGrid.addEventListener('click', (e) => {
        if (e.target.id = 'newGrid'){
            e.stopPropagation();
            gridSize = prompt('What dimensions? Enter one number, it will be used for both axis.');
            
            while (body.firstChild){
                body.removeChild(body.firstChild)
            };
            createGrid();
            
        };  
        
        
    });
};

document.addEventListener('DOMContentLoaded', createGrid());




