import { Title } from '../game/title/title.component.js';
import { Settings } from '../game/settings/settings.component.js';
import { Button } from '../game/button/button.component.js';
import { settingsData } from '../../data/settings.data.js';

export const containerElement = document.getElementById('container');

export function renderStartGame() {
	containerElement.innerHTML = '';
	const titleElement = Title();
	const settingsElement = Settings(settingsData);
	const buttonElement = Button();
	containerElement.append(titleElement, settingsElement, buttonElement);
}