import { Settings } from './settings/settings.component.js';
import { Scores } from './scores/scores.component.js';
import { Grid } from './grid/grid.component.js';
import { settingsData } from '../../data/settings.data.js';

export function Game() {
	const containerElement = document.createElement('div');
	containerElement.classList.add('container');

	const settingsElement = Settings(settingsData);
	containerElement.append(settingsElement);

	const scoresElement = Scores();
	containerElement.append(scoresElement);

	const gridElement = Grid();
	containerElement.append(gridElement);

	return containerElement;
}




