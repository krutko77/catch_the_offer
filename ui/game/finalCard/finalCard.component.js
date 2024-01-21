import { APP_STATUSES, changeAppStatus } from '../../../data/game.data.js';
import { changeApp } from '../../../main.js';
import { CardImg } from './cardImg/cardImg.component.js';

export function FinalCard(finalData) {

	console.log('finalData', finalData)
	const container = document.createElement('div');
	container.classList.add('card-wrapper');

	const cardBody = document.createElement('div');
	cardBody.classList.add('card-body');

	const cardTitle = document.createElement('h1');
	cardTitle.classList.add('card-title');
	cardTitle.innerText = finalData.title;

	const cardLabel = document.createElement('p');
	cardLabel.classList.add('card-label');
	cardLabel.innerText = finalData.label;

	const cardList = document.createElement('ul');
	cardList.classList.add('card-list');

	let array = [['Catch:', finalData.sumCatch], ['Miss:', finalData.sumMiss], ['Time:', finalData.sumTime]]

	for (let i = 0; i < array.length; i++) {
		const contentBox = document.createElement('li');
		contentBox.classList.add('content-box');
		const leftCell = document.createElement('span');
		leftCell.classList.add('left-cell');
		leftCell.innerText = array[i][0];
		cardList.append(leftCell);
		const rightCell = document.createElement('span');
		rightCell.classList.add('right-cell');
		rightCell.innerText = array[i][1];
		cardList.append(rightCell);
		cardBody.append(cardList);
	}

	const cardButton = document.createElement('button');
	cardButton.classList.add('card-button', 'button');
	cardButton.innerText = 'Play again';
	cardButton.addEventListener('click', () => changeAppStatus(APP_STATUSES.start, changeApp))

	const cardImg = CardImg(finalData.iconSrc);
	cardBody.append(cardTitle, cardLabel, cardList, cardButton, cardImg);

	container.append(cardBody);
	changeAppStatus(APP_STATUSES.final, changeApp);

	return
}

export const finalDataCard = FinalCard();