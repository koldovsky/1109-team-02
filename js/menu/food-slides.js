const slides = [ `<div class="food__card card__container">
<h4 class="card__name">Snacks</h4>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">SPICY NACHOS</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$15</p>
  </div>
  <p class="card__info-description">
    Cheddar cheese, jalapenos, queso fresco, sour cream, salsa
  </p>
</article>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">FISH & CHIPS</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$12</p>
  </div>
  <p class="card__info-description">
    Ale battered cod, coleslaw, French fries, and tartar sauce
  </p>
</article>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">FRIED CALAMARY</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$12</p>
  </div>
  <p class="card__info-description">
    Fried calamari served with spicy tartar sauce and dill aioli
  </p>
</article>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">CHICKEN WRAP</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$18</p>
  </div>
  <p class="card__info-description">
    Grilled chicken, bacon, tomato, cucumber, avocado, village sauce
  </p>
</article>
<article class="card__info-container">
  <div class="card__info">
    <h5 class="card__info-name">MAC & CHEESE BITES</h5>
    <div class="card__info-line"></div>
    <p class="card__info-price">$10</p>
  </div>
  <p class="card__info-description">
    With maple bacon and cheese sauce
  </p>
</article>
</div>`,
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