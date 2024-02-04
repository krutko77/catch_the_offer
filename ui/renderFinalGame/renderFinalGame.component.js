import { containerElement } from "../renderStartGame/renderStartGame.component.js";
import { FinalCard } from "../game/finalCard/finalCard.component.js";
import { FINAL_STATUSES, data } from '../../data/game.data.js';

// пустой объект данных для finalCardData 
export const finalCardData = {};

// прописываем данные finalCardData в зависимости от результата игры
export function fillDetailsFinalCard() {
	if (data.finalStatus === FINAL_STATUSES.victory) {
		finalCardData.title = 'You Win!';
		finalCardData.label = 'Congratulations';
		finalCardData.iconSrc = 'assets/images/yuo-win-icon.svg';
	}
	if (data.finalStatus === FINAL_STATUSES.loss) {
		finalCardData.title = 'You Lose!';
		finalCardData.label = "You'll be lucky next time";
		finalCardData.iconSrc = 'assets/images/yuo-lose-icon.svg'
	}
	finalCardData.sumCatch = data.score.caughtCount,
	finalCardData.sumMiss = data.score.missCount,
	finalCardData.minutes = data.gameDuration.minutes,
	finalCardData.seconds = data.gameDuration.seconds
}

export function renderFinalGame() {
	containerElement.innerHTML = '';
	const finalElement = FinalCard(finalCardData);
	containerElement.append(finalElement);
}