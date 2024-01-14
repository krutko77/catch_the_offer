import { data, subscribe } from "../../../data/game.data.js";

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
	const spanLeftBoxScores = document.createElement('span');
	spanLeftBoxScores.append(data.score.caughtCount);
	leftBoxScores.append('catch:', spanLeftBoxScores);

	const rightBoxScores = document.createElement('div');
	const spanRightBoxScores = document.createElement('span');
	spanRightBoxScores.append(data.score.missCount);
	rightBoxScores.append('miss:', spanRightBoxScores);

	containerElement.append(leftBoxScores, rightBoxScores);
}