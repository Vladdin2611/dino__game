// const cactus = document.querySelector('.cactus');
// const dino = document.querySelector('.dino');
// const button = document.querySelector('.button');
// const start123 = document.querySelector('.start__game');

// start123.addEventListener('click', function (event) {
// 	cactus.classList.add('cactus__animation')
// 	gameOver.style.display = 'none';
// 	console.log('game start');
// });


// button.addEventListener('click', dinoJump)


// let isAlive = setInterval(function () {
// 	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
// 	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

// 	if (cactusLeft <= 50 && cactusLeft > 0 && dinoTop >= 140) {
// 		gameOver.style.display = 'block';
// 		// alert('GAME OVER!!');
// 		cactus.classList.remove('cactus__animation');
// 	}
// }, 10)

// document.addEventListener('keydown', function (event) {
// 	if (event.code === 'Space') {
// 		dino.classList.add('jump')
// 	}
// 	setTimeout(function () {
// 		dino.classList.remove('jump')
// 	}, 300)
// });

// function dinoJump() {
// 	if (dino.classList != 'jump') {
// 		dino.classList.add('jump')
// 	}
// 	setTimeout(function () {
// 		dino.classList.remove('jump')
// 	}, 300)
// }


// const wrapper = document.querySelector('.wrapper');
// const gameOver = document.querySelector('.game__over');
// const pauseTime = document.querySelector('.pause');
// document.addEventListener('keydown', function pause(event) {
// 	if (event.code === 'Escape') {
// 		wrapper.style.display = 'none';

// 		// pauseTime.style.display = 'block';
// 		setTimeout(function () {
// 			pauseTime.style.display = 'block';
// 		}, 500)
// 	}
// 	if (event.code === 'Space') {
// 		wrapper.style.display = 'block';
// 		pauseTime.style.display = 'none';
// 	}
// });

const cactus = document.querySelector('.cactus');
const dino = document.querySelector('.dino');
const buttonDino = document.querySelector('.button__dino');
const start123 = document.querySelector('.start__game');

start123.addEventListener('click', function (event) {
	cactus.classList.add('cactus__animation')
});


buttonDino.addEventListener('click', function (event) {
	if (dino.classList != 'jump') {
		dino.classList.add('jump')
	}
	setTimeout(function () {
		dino.classList.remove('jump')
	}, 300)
})


let isAlive = setInterval(function () {
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

	if (cactusLeft <= 50 && cactusLeft > 0 && dinoTop >= 140) {
		// alert('GAME OVER!!');
		cactus.classList.remove('cactus__animation');
		gameOverBtn.style.display = 'block'
		dinoWrapper.style.display = 'none'
	}
}, 10)

const gameOverBtn = document.querySelector('.game__over');
const dinoWrapper = document.querySelector('.wrapper');

gameOverBtn.addEventListener('click', newstartGame)

function newstartGame() {
	gameOverBtn.style.display = 'none'
	dinoWrapper.style.display = 'block'
}