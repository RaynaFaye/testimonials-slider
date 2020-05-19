const buttonNext = document.querySelector('.next-button');
const buttonPrev = document.querySelector('.prev-button');
const tanyaTestimonial = document.querySelector('.testimonial__tanya');
const johnTestimonial = document.querySelector('.testimonial__john');

function changeTestimonial() {
  if (tanyaTestimonial.classList.contains('hidden')) {
    tanyaTestimonial.classList.remove('hidden');
    johnTestimonial.classList.add('hidden');
  } else {
    johnTestimonial.classList.remove('hidden');
    tanyaTestimonial.classList.add('hidden');
  }
}

buttonNext.addEventListener('click', changeTestimonial);
buttonPrev.addEventListener('click', changeTestimonial);
