const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0; // Index of current slide
const bannerImg = document.querySelector('.banner-img'); // Main image element
const bannerText = document.querySelector('#banner p'); // Main text element

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');

function updateSlide(index) {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; // Update main image
    bannerText.innerHTML = slides[index].tagLine; // Update main text

	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[index].classList.add('dot_selected');
}

arrowRight.addEventListener("click", () => {
	if (currentSlide < slides.length - 1) {
		currentSlide++;
    } else {
		currentSlide = 0; // Reset to the first slide when reaching the end
	}
	updateSlide(currentSlide);
	console.log('Flèche droite cliquée')
});

arrowLeft.addEventListener("click", () => {
	if (currentSlide > 0) {
        currentSlide--;
    } else {
		currentSlide = slides.length - 1; // Reset to the last slide when reaching the beginning
	}
	updateSlide(currentSlide);
	console.log('Flèche gauche cliquée')
});

updateSlide(currentSlide); // Initialize the slideshow with the first slide

