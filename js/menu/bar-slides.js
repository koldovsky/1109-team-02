const carousel = document.querySelector('.bar__carousel');
const carouselInner = carousel.querySelector('.bar__cards');
const prevButton = carousel.querySelector('.button-prev');
const nextButton = carousel.querySelector('.button-next');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;

const renderBeersInfo = (beers, container) => {
  let beersDomString = '';
  for (const beer of beers) {
      beersDomString += `
      <article class="card__info-container">      
          <div class="card__info">
              <h5 class="card__info-name">${beer.name}</h5>
              <div class="card__info-line"></div>
              <p class="card__info-price">${beer.price}</p>
          </div>
          <p class="card__info-description">
              ${beer.description}
          </p>
      </article>`;
  }
  container.innerHTML = beersDomString;
};

const productsBotteled = await fetch('api/bar-botteled.json');
const cardContainerBotteled = document.querySelector('.card__botteled-container');
const beersBotteled = await productsBotteled.json();
renderBeersInfo(beersBotteled, cardContainerBotteled);

const productsTop = await fetch('api/bar-beer-on-top.json');
const cardContainerTop = document.querySelector('.card__top-container');
const beersTop = await productsTop.json();
renderBeersInfo(beersTop, cardContainerTop);

const productsCocktails = await fetch('api/bar-cocktails.json');
const cardContainerCocktails = document.querySelector('.card__cocktails-container');
const beersCocktails = await productsCocktails.json();
renderBeersInfo(beersCocktails, cardContainerCocktails);

setupCarousel();

function getSlidesPerView() {
    if (window.innerWidth >= 768) return 2;
    return 1;
}

function setupCarousel() {
    // Remove clones if they exist
    slides = slides.filter(slide => !slide.classList.contains('clone'));

    // Add clones at start and end for infinite looping
    const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
    const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

    // Add all slides to the carousel
    carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

    // Update slides
    slides = Array.from(carouselInner.children);

    updateCarousel();
}

function cloneSlide(slide) {
    const clone = slide.cloneNode(true);
    clone.classList.add('clone');
    return clone;
}

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
}

// Event listeners
prevButton.addEventListener('click', () => {
    if (--currentIndex < 0) {
        currentIndex = slides.length - slidesPerView * 2 - 1;
        carouselInner.style.transition = 'none';
        updateCarousel();
        // Allow transition to complete, then reset transition style
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                carouselInner.style.transition = '';
            });
        });
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    carouselInner.style.transition = ''; // Ensure transition is not 'none'
    if (++currentIndex >= slides.length - slidesPerView) {
        currentIndex = slidesPerView;
        carouselInner.style.transition = 'none';
        updateCarousel();
        // Allow transition to complete, then reset transition style
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                carouselInner.style.transition = '';
            });
        });
    }
    updateCarousel();
});

window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    setupCarousel();
});