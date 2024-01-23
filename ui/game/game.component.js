import { GameTimer } from '../../data/game.data.js';
import { Player } from '../../sound/player.js';
import { Scores } from './scores/scores.component.js';
import { Grid } from './grid/grid.component.js';
import { createElementWithClass } from '../../helpers.js';

// компонент, включающий в себя компонентты Scores и Grid
export function Game() {
	Player();
	GameTimer();

	const container = createElementWithClass('div', 'game-wrapper');

	const scoresElement = Scores();
	container.append(scoresElement);

	const gridElement = Grid();
	container.append(gridElement);

	return container;
}




