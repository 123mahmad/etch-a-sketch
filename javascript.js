const gridSide = 16;
const numTiles = gridSide**2;

const siteBody = document.querySelector(`body`);
const container = document.createElement(`div`);
container.classList.add (`container`);
container.style.display = `grid`;
container.style.width = `${50*gridSide}px`;
siteBody.append(container);

let gridLayout = ``;
for (let i = 0 ; i < gridSide ; i++) {
  gridLayout += `auto `;
}

container.style.grid = `'${gridLayout}`;

for (let i = 0 ; i < numTiles ; i++) {
  const gridTile = document.createElement(`div`);
  gridTile.style.height = `50px`;
  gridTile.style.width = `50px`;
  container.append(gridTile);
}



