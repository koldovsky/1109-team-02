const response = await fetch('api/food-menu-snacks.json');
const snacks = await response.json()

function renderFoodCardSnacks(snacks) {
    let snacksDomString = '';
    for (const snack of snacks) {
        snacksDomString += `
        <article class="card__info-container">      
  <div class="card__info">
    <h5 class="card__info-name">${snack.name}</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">${snack.price}</p>
  </div>
  <p class="card__info-description">
  ${snack.description}
  </p></article>`;
    }
    const snacksContainer = document.querySelector('.card__snacks-container');
    snacksContainer.innerHTML = snacksDomString;
}
renderFoodCardSnacks(snacks);



