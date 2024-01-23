import { renderApp } from '../../../main.js';
import { APP_STATUSES, changeAppStatus, clearScores, finalCardData, resetSettings, resetTimer } from '../../../data/game.data.js';
import { CardImg } from './cardImg/cardImg.component.js';
import { createElementWithClass } from '../../../helpers.js';

export function FinalCard(finalData) {

	const container = createElementWithClass('div', 'card-wrapper');
	const cardBody = createElementWithClass('div', 'card-body');
	const cardTitle = createElementWithClass('h1', 'card-title');
	cardTitle.innerText = finalData.title;
	const cardLabel = createElementWithClass('p', 'card-label');
	cardLabel.innerText = finalData.label;
	const cardList = createElementWithClass('ul', 'card-list');

	let array = [['Catch:', finalData.sumCatch], ['Miss:', finalData.sumMiss], ['Time:', finalCardData.minutes + "m" + " " + finalCardData.seconds + "s"]]

	for (let i = 0; i < array.length; i++) {
		const contentBox = document.createElement('li');
		contentBox.classList.add('content-box');
		const leftCell = document.createElement('span');
		leftCell.classList.add('left-cell');
		leftCell.innerText = array[i][0];
		const rightCell = document.createElement('span');
		rightCell.classList.add('right-cell');
		rightCell.innerText = array[i][1];
		contentBox.append(leftCell, rightCell);
		cardList.append(contentBox)
	}

	const cardButton = createElementWithClass('button', 'card-button', 'button');
	cardButton.innerText = 'Play again';
	cardButton.addEventListener('click', () => changeAppStatus(APP_STATUSES.start, renderApp), resetSettings(), clearScores(), resetTimer())

	const cardImg = CardImg(finalData.iconSrc);
	cardBody.append(cardTitle, cardLabel, cardList, cardButton, cardImg);
	container.append(cardBody);

	return container;
}

