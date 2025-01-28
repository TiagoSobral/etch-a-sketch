const grid = document.querySelector(".grid");

// function createGrid() {
//     const column = document.createElement("div");
//     grid.appendChild(column);
// };

for (let i = 1; i <= 16; i++) {
    let div = document.createElement("div");
    grid.appendChild(div);
}