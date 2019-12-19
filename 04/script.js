'use strict';

const leftButton = document.getElementById('leftButton'),
	  rightButton = document.getElementById('rightButton'),
	  slide = document.querySelectorAll('.slide');

leftButton.addEventListener('click', () => {
	for (let i = 0; i !== 3; i++) {
		slide[i].style.right = null;
		slide[i].style.left += '1050px';
	}
});

rightButton.addEventListener('click', () => {
	for (let i = 0; i !== 3; i++) {
		slide[i].style.left = null;
		slide[i].style.right += '1050px'; 
	}
})