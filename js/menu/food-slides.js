const carousel = document.querySelector('.food__carousel');
const carouselInner = carousel.querySelector('.food__cards');
const prevButton = carousel.querySelector('.button-prev');
const nextButton = carousel.querySelector('.button-next');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;


const renderFoodInfo = (food, container, rate = 1) => {
  let foodDomString = '';
  for (const product of food) {
      foodDomString += `
      <article class="card__info-container">      
          <div class="card__info">
              <button class="card__info-name">${product.name}</button>
              <div class="card__info-line"></div>
              <p class="card__info-price">${(product.price * rate).toFixed(2)}</p>
          </div>
          <p class="card__info-description">
              ${product.description}
          </p>
      </article>`;
  }
  container.innerHTML = foodDomString;
};
  
let currencies;
async function updateCrrency(){
    if (!currencies) {
        const cachedCurrencies = localStorage.getItem('currencies');

        if (cachedCurrencies) {
            currencies = JSON.parse(cachedCurrencies);
        } else {
            const response = await fetch('api/exchange.json');
            currencies = await response.json();
            
            localStorage.setItem('currencies', JSON.stringify(currencies));
        }
    }

    const currency = document.querySelector('.food__currency').value;
    const rate = currencies.rates[currency];
    renderFoodInfo(foodSnacks, cardContainerSnacks,rate);
    renderFoodInfo(foodBurgers, cardContainerBurgers,rate);
    renderFoodInfo(foodMeat, cardContainerMeat,rate);

    setupCarousel();

}
document.querySelector('.food__currency').addEventListener('change', updateCrrency);

const productsSnacks = await fetch('api/menu/food-snacks.json');
const cardContainerSnacks = document.querySelector('.card__snacks-container');
const foodSnacks = await productsSnacks.json();
renderFoodInfo(foodSnacks, cardContainerSnacks);

const productsBurgers = await fetch('api/menu/food-burgers.json');
const cardContainerBurgers = document.querySelector('.card__burgers-container');
const foodBurgers = await productsBurgers.json();
renderFoodInfo(foodBurgers, cardContainerBurgers);

const productsMeat = await fetch('api/menu/food-meat.json');
const cardContainerMeat = document.querySelector('.card__meat-container');
const foodMeat = await productsMeat.json();
renderFoodInfo(foodMeat, cardContainerMeat);

setupCarousel()

function getSlidesPerView() {
    if (window.innerWidth >= 768) return 2;
    return 1;
}


function setupCarousel() {
    // Remove clones if they exist
    slides = slides.filter(slide => !slide.classList.contains('clone'));

    // Add clones at start and end for infinite looping
    const clonesStart = slides.slice(-slidesPerView*3).map(cloneSlide);
    const clonesEnd = slides.slice(0, slidesPerView*3).map(cloneSlide);

    // Add all slides to the carousel
    carouselInner.innerHTML = '';
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
    updateCrrency();
});
