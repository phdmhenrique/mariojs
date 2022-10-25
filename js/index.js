const mario = document.querySelector('.mario')
const pipe  = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const loseButton = document.querySelector('.loseButton')
const resetGameButton = document.querySelector('.resetGameButton')

pipe.classList.add('pipe-animation')

const jump = () => {
	mario.classList.add('jump')

	setTimeout(() => {
		mario.classList.remove('jump')
	}, 500)
}

function loseGame() {
	const pipePosition   = pipe.offsetLeft
	const marioPosition  = +window.getComputedStyle(mario).bottom.replace('px', '')
	const cloudsPosition = clouds.offsetLeft

	if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80)
	{
		// remove o estilo de animacao da classe pipe
		pipe.classList.remove('pipe-animation')
		pipe.style.left = `${pipePosition}px`

		mario.style.animation = 'none'
		mario.style.bottom = `${marioPosition}px`

		mario.src = 'imgs/game-over.png'
		mario.style.width = '80px'
		mario.style.marginLeft = '50px'

		clouds.style.animation = 'none'
		clouds.style.left = `${cloudsPosition}px`

		// btn reiniciar
		loseButton.classList.add('lose-add')

		clearInterval(loop)
	}
}

const loop = setInterval(() => {
	loseGame()
}, 10)

document.addEventListener('keydown', jump)

resetGameButton.addEventListener('click', () => {
	pipe.classList.add('pipe-animation')
	pipe.style = ''

	mario.style.animation = ''
	mario.style.bottom = '0'

	mario.src = 'imgs/mario.gif'
	mario.style.width = '150px'
	mario.style.marginLeft = '0'

	clouds.style.animation = 'none'
	clouds.style = ''

	// btn reiniciar
	loseButton.classList.remove('lose-add')

	setInterval(() => {
		loseGame()
	}, 10)
})