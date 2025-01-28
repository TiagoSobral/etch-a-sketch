const grid = document.querySelector(".grid");

for (let i = 1; i <= 16; i++) {
    let columnDiv = document.createElement("div");
    columnDiv.classList.toggle(`column-${i}`);
    grid.appendChild(columnDiv);
    for (let j = 1; j <= 16; j++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.toggle(`row-${j}`);
        columnDiv.appendChild(rowDiv);
    }
}