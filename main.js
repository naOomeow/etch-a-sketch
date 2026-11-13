//main container
const container = document.querySelector(`#container`);

//inner container
const innerContainer = document.createElement(`div`);
innerContainer.classList.add(`innerContainer`);

const buttonArea = document.createElement(`div`);
buttonArea.classList.add(`buttonArea`);
//button
const inputButton = document.createElement(`button`);
inputButton.classList.add(`Buttons`);
inputButton.textContent = `Set Grid`;
buttonArea.appendChild(inputButton);   
container.appendChild(buttonArea);

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
        //brightness will -20 every touch
        let brigtness = 100;
        divRow.addEventListener(`mouseenter`, (event) => {
            //set random color from array
            const colors = [`red`, `green`, `blue`];
            function setColor() {
                let setColor = Math.floor(Math.random() * colors.length );
                console.log(setColor);
                console.log(colors[setColor]);
                event.target.setAttribute(`class`, `divGridRow`);
                event.target.classList.add(colors[setColor]);
            };

            //to check if already hovered
            let getClass = event.target.getAttribute(`class`);
            console.log(getClass);

            //changes brigtness count of each div
            if (brigtness > 0) {
                brigtness -= 20;    
            };
            
            //if class is already present lower brigtness
            if (event.target.classList.contains(getClass)) {
                setColor();    
            } else {
                event.target.style.filter = `brightness(${brigtness}%)`;
                console.log(brigtness);
            };
            
            
        });
        divColumn.appendChild(divRow);
        
    };
    
};

//repeat the function to make number of columns
function addRowsandColums() { 
    //asking user input
    const askUser = parseInt(prompt(`Input the number of Rows X Column : `));

    //change rowsXcolumns to new value
    
    if (askUser > 100 || askUser <= 0 || isNaN(askUser) ){
        alert(`Min 1 and Max 100 allowed!`);
    } else {
            //delete grid
        for (let i = 0; i < rowsXcolumns; i++){
            innerContainer.removeChild(innerContainer.lastChild);
        };

        rowsXcolumns = askUser;

        //add the new grid 
        for (let i = 0; i < rowsXcolumns ; i++){
            addDivRow();
        };
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
