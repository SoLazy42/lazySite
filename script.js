'use strict';

const leftButton = document.getElementById('leftButton'),
	  rightButton = document.getElementById('rightButton'),
	  slide = document.querySelectorAll('.slide');

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
		console.log(slide[i].style.left);
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
		console.log(slide[i].style.left);
	}
	
})