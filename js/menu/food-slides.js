/*const carousel = document.querySelector('.food__carousel');
const carouselInner = carousel.querySelector('.food__cards');
const prevButton = carousel.querySelector('.button-prev');
const nextButton = carousel.querySelector('.button-next');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;

const renderFoodInfo =(food,container, rate = 1) =>{
  let foodDomString ='';
   for(const product of food) {
       foodDomString +=`
        <article class="card__info-container">
        <div class="card__info">
           <h5 class="card__info-name">${product.name}</h5>
           <div class="card__info-line"></div>
           <p class="card__info-price">${product.price}</p>
         </div>
         <p class="card__info-description">
            ${product.description}
          </p>
         </article>`
   }
   container.innerHTML = foodDomString;



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
    renderFoodInfo(food, container, rate);
}
document.querySelector('.food__currency').addEventListener('change', updateCrrency);
};
const productsSnacks = await fetch('api/food-menu-snacks');
const cardContainerSnacks = document.querySelector('.card__snacks-container');
const snacks = await productsSnacks.json();
renderFoodInfo(snacks, cardContainerSnacks);

const productsBurgers = await fetch('api/food-menu-burgers');
const cardContainerBurgers = document.querySelector('.card__burgers-container');
const burgers = await productsBurgers.json();
renderFoodInfo(burgers, cardContainerBurgers);

const productsMeat = await fetch('api/food-menu-meat');
const cardContainerMeat = document.querySelector('.card__meat-container');
const meat = await productsMeat.json();
renderProductsInfo(meat, cardContainerMeat);

setupCarousel()

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
});*/
const carousel = document.querySelector('.food__carousel');
const carouselInner = carousel.querySelector('.food__cards');
const prevButton = carousel.querySelector('.button-prev');
const nextButton = carousel.querySelector('.button-next');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;


const renderBeersInfo = (beers, container, rate = 1) => {
  let beersDomString = '';
  for (const beer of beers) {
      beersDomString += `
      <article class="card__info-container">      
          <div class="card__info">
              <button class="card__info-name">${beer.name}</button>
              <div class="card__info-line"></div>
              <p class="card__info-price">${(beer.price * rate).toFixed(2)}</p>
          </div>
          <p class="card__info-description">
              ${beer.description}
          </p>
      </article>`;
  }
  container.innerHTML = beersDomString;

  
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

    const currency = document.querySelector('.bar__currency').value;
    const rate = currencies.rates[currency];
    renderBeersInfo(beers, container, rate);
}
document.querySelector('.food__currency').addEventListener('change', updateCrrency);
};

const productsSnacks = await fetch('api/food-menu-snacks.json');
const cardContainerSnacks = document.querySelector('.card__snacks-container');
const beersSnacks = await productsSnacks.json();
renderBeersInfo(beersSnacks, cardContainerSnacks);

const productsBurgers = await fetch('api/food-menu-burgers.json');
const cardContainerBurgers = document.querySelector('.card__burgers-container');
const beersBurgers = await productsBurgers.json();
renderBeersInfo(beersBurgers, cardContainerBurgers);

const productsMeat = await fetch('api/food-menu-meat.json');
const cardContainerMeat = document.querySelector('.card__meat-container');
const beersMeat = await productsMeat.json();
renderBeersInfo(beersMeat, cardContainerMeat);

setupCarousel()

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
/*const slides = [ `<div class="food__card card__container">
<h4 class="card__name">Snacks</h4>
<div class="card__snacks-container"></div>
`,
`<div class="food__card card__container">
<h4 class="card__name">burgers</h4>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">CLASSIC BURGER</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$14</p>
  </div>
  <p class="card__info-description">
    Beef, tomato, pickle, lettuce, cucumber, cheddar cheese, bacon
  </p>
</article>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">BEEF KING</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$18</p>
  </div>
  <p class="card__info-description">
    Beef brisket, Swiss cheese, caramelised onions
  </p>
</article>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">DOUBLE CHEESEBURGER</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$22</p>
  </div>
  <p class="card__info-description">
    Double beef patties with cheese, tomato, topped with mozzarella
  </p>
</article>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">CHICKEN BURGER</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$15</p>
  </div>
  <p class="card__info-description">
    Chicken breast, soaked with hot sauce & blue cheese slaw
  </p>
</article>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">BOUTIQUE BURGER</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$19</p>
  </div>
  <p class="card__info-description">
    Maple bacon, tomato, red onions topped off with a fried egg
  </p>
</article>
</div>`,
`<div class="food__card card__container">
<h4 class="card__name">Meat</h4>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">SESAME CHICKEN STRIPS</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$13</p>
  </div>
  <p class="card__info-description">
    Chicken breasts in Jack Daniel's® glaze with toasted sesame seeds
  </p>
</article>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">HOT WINGS</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$15</p>
  </div>
  <p class="card__info-description">
    Served with barbecue sauce and coleslaw
  </p>
</article>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">LAMB GYRO</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$20</p>
  </div>
  <p class="card__info-description">
    Lamb, tzatziki sauce, tomato, cucumber & lettuce in pita bread
  </p>
</article>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">LAMB CHOPS</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$22</p>
  </div>
  <p class="card__info-description">
    Marinated herb roasted rack of lamb chops with balsamic sauce
  </p>
</article>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">PAN ROASTED PORK CHOP</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$23</p>
  </div>
  <p class="card__info-description">
    Served in a bourbon & honey glaze with berry sauce
  </p>
</article>
</div>`,

];

let currentSlideIdx = 0;

function renderSlide(){
    const slideContainer = document.querySelector('.food__cards');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if(window.matchMedia('(min-width:768px)').matches) {
      const secondSlideIdx = currentSlideIdx + 1 > slides.length - 1? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
    }

}
function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 > slides.length - 1 > 0 ? 0 : currentSlideIdx + 1 ;
    renderSlide();
}
function prevSlide() {
  currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1 ;
  renderSlide();
}
renderSlide();


//setInterval(nextSlide, 3000);

const buttonNext = document.querySelector('.food-carousel__button-next');
buttonNext.addEventListener('click', nextSlide);

const buttonPrev = document.querySelector('.food-carousel__button-prev');
buttonPrev.addEventListener('click', prevSlide);
window.addEventListener('resize', renderSlide);
*/
