import { APP_STATUSES } from './../../../data/game.data.js';
import { changeAppStatus } from './../../../data/game.data.js';
import { changeApp } from './../../../main.js';

export function Button() {
	const container = document.createElement('button');
	container.classList.add('start-button');
	container.id = 'startButton';
	container.innerText = 'START GAME';
	container.addEventListener('click', () => changeAppStatus(APP_STATUSES.game, changeApp))

	return container
}


/* function renderGame(button) {
	button.style.opacity = '0';
	button.style.visibility = 'hidden';

	const gameElement = Game();
	containerElement.append(gameElement);
} */