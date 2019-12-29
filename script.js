'use strict';

const leftButton = document.getElementById('leftButton'),
	  rightButton = document.getElementById('rightButton'),
	  slide = document.querySelectorAll('.slide'),
	  hamburgerButton = document.querySelector('.hamburger_button'),
	  hiddenNav = document.querySelector('.hidden_nav'),
	  closeButton = document.getElementById('close_button');

let   positionCounter = 0;


leftButton.addEventListener('click', () => {

	if (positionCounter === 1050) {
		positionCounter += 0;
	}
	else {
		positionCounter += 1050;
	}

	for (let i = 0; i < 3; i++) {
		slide[i].style.left = `${positionCounter}px`;
	}

});

rightButton.addEventListener('click', () => {
	
	if (positionCounter === -1050) {
		positionCounter -= 0;
	}
	else {
		positionCounter -= 1050;
	}

	for (let i = 0; i < 3; i++) {
		slide[i].style.left = `${positionCounter}px`;
	}
	
})

hamburgerButton.addEventListener('click', () => {
	hiddenNav.style.left =  `58%`;
})

closeButton.addEventListener('click', () => {
	hiddenNav.style.left =  `100%`;
})