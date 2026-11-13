const container = document.querySelector(`#container`);

function addDivRow() {
    const divColumn = document.createElement(`div`);
    divColumn.classList.add(`divColumn`);
    container.appendChild(divColumn);

    for (let i = 0; i < 16; i++){
        const divRow = document.createElement(`div`);
        divRow.classList.add(`divGridRow`);
        divColumn.appendChild(divRow);    
    };
    
};

for (let i = 0; i < 16; i++){
    addDivRow();
};
