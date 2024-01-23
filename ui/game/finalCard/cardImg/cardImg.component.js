import { createElementWithClass } from "../../../../helpers.js";

export function CardImg(iconSrc) {
	const cardGroupImg1 = createElementWithClass('div', 'card-group-img-1');

	const cardGroupImg2 = createElementWithClass('div', 'card-group-img-2');
	cardGroupImg1.append(cardGroupImg2);

	const cardGroupImg3 = createElementWithClass('div', 'card-group-img-3');
	cardGroupImg1.append(cardGroupImg3);

	const cardIcon = createElementWithClass('img', 'card-icon');
	cardIcon.src = iconSrc;
	cardGroupImg1.append(cardIcon);

	return cardGroupImg1;
}