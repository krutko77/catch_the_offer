import { Title } from './ui/game/title/title.component.js';
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
		const titleElement = Title();
		const settingsElement = Settings(settingsData);
		const buttonElement = Button();
		containerElement.append(titleElement, settingsElement, buttonElement);
		ListenersSettings();
	}
	if (data.appStatus === APP_STATUSES.game) {
		const title = document.getElementById('title');
		title.style.display = 'none';
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




