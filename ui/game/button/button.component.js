import { Game } from "../game.component.js";
import { containerElement } from '../../../main.js';
import { subscribe } from "../../../data/game.data.js";

export function Button() {
	const container = document.createElement('button');
	container.classList.add('start-button');
	container.innerText = 'START GAME';
	container.addEventListener('click', () => renderGame(container))

	return container
}

/* subscribe(renderGame); */

function renderGame(button) {
	button.style.opacity = '0';

	const gameElement = Game();
	containerElement.append(gameElement);
}