import { APP_STATUSES, changeAppStatus } from './../../../data/game.data.js';
import { renderApp } from '../../../main.js';

export function Button() {
	const container = document.createElement('button');
	container.classList.add('start-button', 'button');
	container.id = 'startButton';
	container.innerText = 'START GAME';
	container.addEventListener('click', () => changeAppStatus(APP_STATUSES.game, renderApp));

	return container;
}

