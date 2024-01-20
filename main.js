import { Settings } from './ui/game/settings/settings.component.js';
import { settingsData } from '../../data/settings.data.js';
import { Game } from './ui/game/game.component.js';
import { Button } from './ui/game/button/button.component.js';
import { changeSettings } from './ui/game/settings/settings.component.js';
import { APP_STATUSES, data, changeAppStatus } from './data/game.data.js';


export const containerElement = document.getElementById('container');

// начальная отрисовка приложения
function renderApp() {

	const settingsElement = Settings(settingsData);
	const buttonElement = Button();
	containerElement.append(settingsElement);
	changeSettings();
	containerElement.append(buttonElement);

	return
}

renderApp();

// изменение UI в зависимости от APP_STATUSES
changeAppStatus(changeApp)

export function changeApp() {
	if (data.appStatus === APP_STATUSES.game) {
		const button = document.getElementById('startButton');
		button.style.opacity = '0';
		button.style.visibility = 'hidden';
		const gameElement = Game();
		containerElement.append(gameElement);
	}
	if (data.appStatus === APP_STATUSES.youWin) {
		containerElement.innerHTML = '';
		const gameElement = YouWin();
		containerElement.append(gameElement);
	}
	if (data.appStatus === APP_STATUSES.youLose) {
		containerElement.innerHTML = '';
		const gameElement = YouLose();
		containerElement.append(gameElement);
	}
	if (data.appStatus === APP_STATUSES.start) {
		containerElement.innerHTML = '';
		renderApp();
	}

	return
}




