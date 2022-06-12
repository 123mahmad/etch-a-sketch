const gridLength = 750;
const gridSide = 64;
const numTiles = gridSide**2;

const siteBody = document.querySelector(`body`);
const container = document.createElement(`div`);
container.classList.add (`container`);
container.style.display = `grid`;
container.style.width = `${gridLength}px`;
siteBody.append(container);

let gridLayout = ``;
for (let i = 0 ; i < gridSide ; i++) {
  gridLayout += `auto `;
}

container.style.grid = `'${gridLayout}`;

for (let i = 0 ; i < numTiles ; i++) {
  const gridTile = document.createElement(`div`);
  gridTile.style.height = `${gridLength/gridSide}px`;
  gridTile.style.width = `${gridLength/gridSide}px`;
  gridTile.style.backgroundColor = `grey`;
  gridTile.addEventListener(`mouseover`, () => {
    gridTile.style.backgroundColor = `black`;
  })
  container.append(gridTile);
}