'use strict'

// Hamburger
let hamburger = document.querySelector('.hamburger');
let links = document.querySelector('.menu__links');

for (let link of links.children) {
	link.addEventListener('click', () => {
		links.classList.remove('menu__links_active');
		hamburger.classList.remove('hamburger_active')
	});
};

hamburger.addEventListener('click', function () {
	links.classList.toggle('menu__links_active');
	hamburger.classList.toggle('hamburger_active')
});

// Scrolling
let upChevron = document.querySelector('.up-chevron');
let clientHeight = document.documentElement.clientHeight;

upChevron.addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		behavior: "instant"
	});
});

window.addEventListener('scroll', function () {
	if (document.documentElement.scrollTop > clientHeight) {
		upChevron.style.display = 'flex';
	} else {
		upChevron.style.display = 'none';
	};
});