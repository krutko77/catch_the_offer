
export function CardImg(iconSrc) {
	const cardGroupImg1 = document.createElement('div');
	cardGroupImg1.classList.add('card-group-img-1');

	const cardGroupImg2 = document.createElement('div');
	cardGroupImg2.classList.add('card-group-img-2');
	cardGroupImg1.append(cardGroupImg2);

	const cardGroupImg3 = document.createElement('div');
	cardGroupImg3.classList.add('card-group-img-3');
	cardGroupImg1.append(cardGroupImg3);

	const cardIcon = document.createElement('img');
	cardIcon.classList.add('card-icon');
	cardIcon.src = iconSrc;
	cardGroupImg1.append(cardIcon);

	return cardGroupImg1;
}