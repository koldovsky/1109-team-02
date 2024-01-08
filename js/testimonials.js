const testimonials =[
    {
        id: '1',
        image: 'img/testimonials/profile-sam.png',
        name: 'SAM WHITE',
        description: 'This place is definitely worth visiting and making friends there. I dont know how you do it, but it is a strange combination of a posh place for beer snobs and a local pub at the same time. It`s so weird that it works. Love it!',
        date: 'May 28, 2022'
    },
    {
        id: '2',
        image: 'img/testimonials/profile-bernard.webp',
        name: 'BERNARD REDHEAD',
        description: 'I am definitely a beer person, and my girlfriend loves cider offered at Beer Boutique as well. We love to taste different craft beer varieties on Sundays here. Besides, the concerts there are amazing. Rock it on!',
        date: 'March 15, 2022'
    },

];

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