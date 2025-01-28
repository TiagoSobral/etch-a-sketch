const grid = document.querySelector(".grid");

for (let i = 1; i <= 16; i++) {
    let columnDiv = document.createElement("div");
    columnDiv.classList.toggle(`column-${i}`);
    grid.appendChild(columnDiv);
    }

