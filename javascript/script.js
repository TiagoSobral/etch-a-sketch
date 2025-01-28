const grid = document.querySelector(".grid");

for (let i = 1; i <= 16; i++) {
    let div = document.createElement("div");
    div.classList.toggle(`column-${i}`);
    grid.appendChild(div);
}

