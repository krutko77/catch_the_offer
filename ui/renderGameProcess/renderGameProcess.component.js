import { Game } from "../game/game.component.js";
import { containerElement } from "../renderStartGame/renderStartGame.component.js";
import { changeStatusSelect } from "../game/settings/settings.component.js";

export function renderGameProcess() {

	const title = document.getElementById('title');
	title.style.display = 'none';
	const button = document.getElementById('startButton');
	button.style.display = 'none';
	const gameElement = Game();
	containerElement.append(gameElement);

	changeStatusSelect();
}