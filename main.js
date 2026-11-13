//main container
const container = document.querySelector(`#container`);

//inner container
const innerContainer = document.createElement(`div`);
innerContainer.classList.add(`innerContainer`);

//number of rows x columns
let rowsXcolumns = 16;

//add the div boxes in a row and create column
function addDivRow() {
    //make div column
    const divColumn = document.createElement(`div`);
    divColumn.classList.add(`divColumn`);
    //put the inner container inside the main
    container.appendChild(innerContainer);
    //and add the coumns inside the inner container
    innerContainer.appendChild(divColumn);
    
    //add row div boxes to the columns
    for (let i = 0; i < rowsXcolumns; i++){
        const divRow = document.createElement(`div`);
        divRow.classList.add(`divGridRow`);
        divRow.addEventListener(`mouseenter`, (event) => {
            event.target.classList.add(`divGridChange`);
        });
        divColumn.appendChild(divRow);
        
    };
    
};

//repeat the function to make number of columns
for (let i = 0; i < rowsXcolumns; i++){
    addDivRow();
};
