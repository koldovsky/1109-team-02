/*const slides = [
    `<div class="bar__card card__container">
    <h4 class="card__name">BOTTLED BEER</h4>
    <article class="card__info-container container">
      <div class="card__info">
        <h5 class="card__info-name">INDIAN PALE ALE</h5>
        <div class="card__info-line"></div>
        <p class="card__info-price">$4</p>
      </div>
      <p class="card__info-description">
        Strong and bitter beer with intense aroma
      </p>
    </article>
    <article class="card__info-container container">
      <div class="card__info">
        <h5 class="card__info-name">LAGER BEER</h5>
        <div class="card__info-line"></div>
        <p class="card__info-price">$3.5</p>
      </div>
      <p class="card__info-description">
        This beer is not bitter at all and features wheat aroma
      </p>
    </article>
    <article class="card__info-container container">
      <div class="card__info">
        <h5 class="card__info-name">BITTER</h5>
        <div class="card__info-line"></div>
        <p class="card__info-price">$4</p>
      </div>
      <p class="card__info-description">
        "England's favorite beer", dark and intense
      </p>
    </article>
    <article class="card__info-container container">
      <div class="card__info">
        <h5 class="card__info-name">STOUT</h5>
        <div class="card__info-line"></div>
        <p class="card__info-price">$5</p>
      </div>
      <p class="card__info-description">
        This frothy beer has a medium strength and a pleasant aroma
      </p>
    </article>
    <article class="card__info-container container">
      <div class="card__info">
        <h5 class="card__info-name">CARAMEL ALE</h5>
        <div class="card__info-line"></div>
        <p class="card__info-price">$5.50</p>
      </div>
      <p class="card__info-description">
        Caramel malt sweetness accompanied by spicy and citrusy hops
      </p>
    </article>
  </div>`,
  `<div class="bar__card card__container">
  <h4 class="card__name">beer on top</h4>
  <article class="card__info-container container">
    <div class="card__info">
      <h5 class="card__info-name">BLUE STYLE</h5>
      <div class="card__info-line"></div>
      <p class="card__info-price">$5</p>
    </div>
    <p class="card__info-description">
      Brewed with oats and spiced with orange peel
    </p>
  </article>
  <article class="card__info-container container">
    <div class="card__info">
      <h5 class="card__info-name">BOUTIQUE IPA</h5>
      <div class="card__info-line"></div>
      <p class="card__info-price">$5</p>
    </div>
    <p class="card__info-description">
      Our best-selling draft beer with bitter taste
    </p>
  </article>
  <article class="card__info-container container">
    <div class="card__info">
      <h5 class="card__info-name">ABSOLUTE PORTER</h5>
      <div class="card__info-line"></div>
      <p class="card__info-price">$6</p>
    </div>
    <p class="card__info-description">
      Chocolate peanut butter porter with rich taste
    </p>
  </article>
  <article class="card__info-container container">
    <div class="card__info">
      <h5 class="card__info-name">BELGIAN DREAM</h5>
      <div class="card__info-line"></div>
      <p class="card__info-price">$8</p>
    </div>
    <p class="card__info-description">
      A traditional Belgian-style wheat ale with whispers of orange
    </p>
  </article>
  <article class="card__info-container container">
    <div class="card__info">
      <h5 class="card__info-name">BEER BOUTIQUE LAGER</h5>
      <div class="card__info-line"></div>
      <p class="card__info-price">$9</p>
    </div>
    <p class="card__info-description">
      Crisp, clean and slightly dry with some residual sweetness
    </p>
  </article>
</div>`,
`<div class="bar__card card__container">
<h4 class="card__name">cacktails</h4>
<article class="card__info-container container">
  <div class="card__info">
    <h5 class="card__info-name">MONKEY SOUR</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$10</p>
  </div>
  <p class="card__info-description">
    Monkey Shoulder whisky, strawberry, lemon, sugar
  </p>
</article>
<article class="card__info-container container">
  <div class="card__info">
    <h5 class="card__info-name">OLD FASHIONED</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$11</p>
  </div>
  <p class="card__info-description">
    Buffalo Trace bourbon, demerara, Angostura Bitters
  </p>
</article>
<article class="card__info-container container">
  <div class="card__info">
    <h5 class="card__info-name">PIÑA COLADA</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$10</p>
  </div>
  <p class="card__info-description">
    Havana Club 3 Year Old rum, coconut, pineapple
  </p>
</article>
<article class="card__info-container container">
  <div class="card__info">
    <h5 class="card__info-name">MOJITO</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$11</p>
  </div>
  <p class="card__info-description">
    Havana Club 3 Year Old rum, lime, mint, soda
  </p>
</article>
<article class="card__info-container container">
  <div class="card__info">
    <h5 class="card__info-name">BRAMBLE</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$13</p>
  </div>
  <p class="card__info-description">
    Tanqueray London Dry gin, crème de mure, lemon
  </p>
</article>
</div>`
];

let currentSlideIdx = 0;

function renderSlide(){
    const slideContainer = document.querySelector('.bar__cards');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia('(min-width:768px)').matches) {
      const secondSlideIdx = currentSlideIdx + 1 > slides.length - 1? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
    }

}
function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 > slides.length - 1 > 0 ? 0 : currentSlideIdx + 1 ;
    renderSlide();
}
function prevSlide( ) {
  currentSlideIdx = currentSlideIdx -1 < 0 ? slides.length - 1: currentSlideIdx - 1;
  renderSlide();
}
renderSlide();

setInterval(nextSlide, 3000);*/
const carousel = document.querySelector('.bar__carousel');
const carouselInner = carousel.querySelector('.bar__cards');
const prevButton = carousel.querySelector('.button-prev');
const nextButton = carousel.querySelector('.button-next');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;

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