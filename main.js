import { APP_STATUSES, data, changeAppStatus } from './data/game.data.js';
import { renderStartGame } from './ui/renderStartGame/renderStartGame.component.js';
import { renderGameProcess } from './ui/renderGameProcess/renderGameProcess.component.js';
import { renderFinalGame } from './ui/renderFinalGame/renderFinalGame.component.js';

export function renderApp() {
	if (data.appStatus === APP_STATUSES.start) {
		renderStartGame();
	}
	if (data.appStatus === APP_STATUSES.game) {
		renderGameProcess();
	}
	if (data.appStatus === APP_STATUSES.final) {
		renderFinalGame();
	}
	return;
}

renderApp();
changeAppStatus(renderApp);




