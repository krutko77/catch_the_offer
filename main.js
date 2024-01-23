import { Settings } from './ui/game/settings/settings.component.js';
import { settingsData } from '../../data/settings.data.js';
import { Game } from './ui/game/game.component.js';
import { Button } from './ui/game/button/button.component.js';
import { ListenersSettings } from './ui/game/settings/settings.component.js';
import { APP_STATUSES, data, changeAppStatus, finalCardData } from './data/game.data.js';
import { FinalCard } from './ui/game/finalCard/finalCard.component.js';

export const containerElement = document.getElementById('container');

export function renderApp() {
	if (data.appStatus === APP_STATUSES.start) {
		containerElement.innerHTML = '';
		const settingsElement = Settings(settingsData);
		const buttonElement = Button();
		containerElement.append(settingsElement);
		ListenersSettings();
		containerElement.append(buttonElement);
	}
	if (data.appStatus === APP_STATUSES.game) {
		const button = document.getElementById('startButton');
		button.style.opacity = '0';
		button.style.visibility = 'hidden';
		const gameElement = Game();
		containerElement.append(gameElement);
	}
	if (data.appStatus === APP_STATUSES.final) {
		containerElement.innerHTML = '';
		const finalElement = FinalCard(finalCardData);
		containerElement.append(finalElement);
	}
	return;
}

renderApp();

changeAppStatus(renderApp);




