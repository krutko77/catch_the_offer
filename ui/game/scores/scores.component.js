import { data, subscribe, stopOffer, changeAppStatus, APP_STATUSES, changeDataFinalCard } from "../../../data/game.data.js";
import { renderApp } from "../../../main.js";


export function Scores() {

	subscribe(() => {
		containerElement.innerHTML = '';
		update(containerElement);
	})

	const containerElement = document.createElement('div');
	containerElement.classList.add('scores');
	update(containerElement);

	return containerElement;
}

function update(containerElement) {
	const leftBoxScores = document.createElement('div');
	const updatedScoreCaughtCount = document.createElement('span');
	updatedScoreCaughtCount.append(data.score.caughtCount);
	leftBoxScores.append('catch:', updatedScoreCaughtCount);

	const rightBoxScores = document.createElement('div');
	const updatedScoreMissCount = document.createElement('span');
	updatedScoreMissCount.append(data.score.missCount);
	rightBoxScores.append('miss:', updatedScoreMissCount);

	containerElement.append(leftBoxScores, rightBoxScores);

	stopGame(data.score.caughtCount, data.score.missCount);
}

function stopGame(caughtCount, missCount) {
	if (caughtCount === data.settings.pointsToWin || missCount === data.settings.maximumMisses) {
		stopOffer();
		changeDataFinalCard(caughtCount, missCount);
		changeAppStatus(APP_STATUSES.final, renderApp);

		console.log('data.appStatus', data.appStatus)
	}
}

