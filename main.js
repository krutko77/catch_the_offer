import { Settings } from './ui/game/settings/settings.component.js';
import { settingsData } from '../../data/settings.data.js';
import { Button } from './ui/game/button/button.component.js';
import { changeSettings } from './ui/game/settings/settings.component.js';


export const containerElement = document.getElementById('container');

function renderApp() {
	const settingsElement = Settings(settingsData);
	const buttonElement = Button();
	containerElement.append(settingsElement);
	changeSettings();
	containerElement.append(buttonElement);

	return
}

renderApp();





