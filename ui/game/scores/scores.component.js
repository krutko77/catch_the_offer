import { data, subscribe, stopOffer } from "../../../data/game.data.js";
import { FinalCard } from "../finalCard/finalCard.component.js";


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
		FinalData();

		console.log('data.score.caughtCount', data.score.caughtCount)
		console.log('data.score.missCount', data.score.missCount)

		console.log('data.offerStatus', data.offerStatus)
		console.log('data.appStatus', data.appStatus)
	}
}

// определение финальных результатов и отрисовка финальной карточки
function FinalData() {
	if (data.score.caughtCount === data.settings.pointsToWin) {
		const finalData = {
			title: 'You Win!',
			label: 'Congratulations',
			sumCatch: data.score.caughtCount,
			sumMiss: data.score.missCount,
			sumTime: 20,
			iconSrc: 'assets/images/yuo-win-icon.svg'
		}
	}
	if (data.score.missCount === data.settings.maximumMisses) {
		const finalData = {
			title: 'You Lose!',
			label: "You'll be lucky next time",
			sumCatch: data.score.caughtCount,
			sumMiss: data.score.missCount,
			sumTime: 20,
			iconSrc: 'assets/images/yuo-lose-icon.svg'
		}
		return finalData;
	}
}

console.log('function FinalData', FinalData)
FinalCard(FinalData);