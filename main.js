//main container
const container = document.querySelector(`#container`);

//inner container
const innerContainer = document.createElement(`div`);
innerContainer.classList.add(`innerContainer`);

//button
const inputButton = document.createElement(`button`);
inputButton.classList.add(`Buttons`);
inputButton.textContent = `Set Grid`;   
container.appendChild(inputButton);

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
    for (let i = 0; i < rowsXcolumns ; i++){
        const divRow = document.createElement(`div`);
        divRow.classList.add(`divGridRow`);
        divRow.addEventListener(`mouseenter`, (event) => {
            event.target.classList.add(`divGridChange`);
        });
        divColumn.appendChild(divRow);
        
    };
    
};

//repeat the function to make number of columns
function addRowsandColums() { 
    //asking user input
    const askUser = prompt(`Input the number of Rows X Column : `);
    //delete grid
    for (let i = 0; i < rowsXcolumns; i++){
    innerContainer.removeChild(innerContainer.lastChild);
    };
    //change rowsXcolumns to new value
    rowsXcolumns = parseInt(askUser);
    console.log(rowsXcolumns);
    //add the new grid 
    for (let i = 0; i < rowsXcolumns ; i++){
        addDivRow();
    };
    
};

//when page loads
function firstInit() {
    for (let i = 0; i < rowsXcolumns ; i++){
        addDivRow();
    };
    
};

firstInit();


inputButton.addEventListener(`click`, () => {
    addRowsandColums()
});
