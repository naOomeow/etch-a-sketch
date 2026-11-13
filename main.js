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
        //brightness will -20 every pointer hover
        //kept outside so each div has its own value to change
        let brightness = 100;
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

            //to check if div already has color
            let getClass = colors.some(item => event.target.classList.contains(item));
            console.log(getClass);
            
            //if class is already present lower brightness
            //if no color is present add it 
            if (!getClass) {
                setColor();    
            } else {
                if (brightness > 0) {
                    brightness -= 20;    
                };
                event.target.style.filter = `brightness(${brightness}%)`;
                console.log(brightness);
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
