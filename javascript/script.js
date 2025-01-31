const body = document.querySelector("body");
const grid = document.querySelector(".grid");
const divBtn = document.createElement("div");
const button = document.createElement("button");

button.textContent = "Set a Grid Number!";

divBtn.classList.toggle("button");

body.appendChild(divBtn);
body.insertBefore(divBtn,grid);
divBtn.append(button);

button.addEventListener("click", () => {
   userAnswer = prompt("Choose a Number from 1-100:");
   number = Number(userAnswer); 
   alert(number);
    if (number > 100 || number < 1) {
        alert("You chose outside the range! Try again!");
    }
    else {
        const allColumns = document.querySelectorAll(".column");
        for (element of allColumns) {
            grid.removeChild(element);
        };

        gridLoop(number);
    };
});

function gridLoop(a) {
    if (a === undefined) {
        a = 16;
    }

for (let i = 1; i <= a; i++) {
    let columnDiv = document.createElement("div");
    columnDiv.classList.toggle("column");
    grid.appendChild(columnDiv);
    
    for (let j = 1; j <= a; j++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.toggle("row");
        columnDiv.appendChild(rowDiv);
    }
}};

gridLoop();

const columns = document.querySelectorAll(".column");
const rows = document.querySelectorAll(".row");

for (const row of rows) {
    row.addEventListener("mouseenter", () => {
        // row.style.backgroundColor = "red";
    });
};

function askNumber() {
    prompt("Choose a Number:");
};

