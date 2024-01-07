const response = await fetch('api/testimonials.json');
const testimonials = await response.json()

function renderTestimonials(testimonials) {
    let testimonialsDomString = '';
    for (const testimonial of testimonials) {
        testimonialsDomString += `
        <div class="testimonials__review-card">
        <div class="testimonials__review">
        <img
          class="testimonials__review-photo"
          src="${testimonial.image}"
          alt="${testimonial.name}"
        />
        <p class="testimonials__review-name">${testimonial.name}</p>
        <p class="testimonials__review-text">
        ${testimonial.description}
        </p>
        <p class="testimonials__review-date">${testimonial.date}</p>
      </div>
      </div>`;
    }
    const testimonialsContainer = document.querySelector('.testimonials__review-container');
    testimonialsContainer.innerHTML = testimonialsDomString;
}
renderTestimonials(testimonials);