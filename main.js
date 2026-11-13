const container = document.querySelector(`#container`);

function addDivRow() {
    const divColumn = document.createElement(`div`);
    divColumn.classList.add(`divColumn`);
    container.appendChild(divColumn);
    

    for (let i = 0; i < 16; i++){
        const divRow = document.createElement(`div`);
        divRow.classList.add(`divGridRow`);
        divRow.addEventListener(`mouseenter`, (event) => {
            event.target.classList.add(`divGridChange`);
        });
        divColumn.appendChild(divRow);
        
    };
    
};

for (let i = 0; i < 16; i++){
    addDivRow();
};
