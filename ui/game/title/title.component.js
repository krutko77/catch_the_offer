import { createElementWithClass } from "../../../helpers.js";

export function Title() {
	const containerElement = createElementWithClass('h1', 'title');
	const firstTitle = createElementWithClass('div', 'first-title');
	const lastTitle = createElementWithClass('div', 'last-title');
	firstTitle.innerText = 'catch';
	lastTitle.innerText = 'the offer!';
	containerElement.append(firstTitle, lastTitle)
	containerElement.id = 'title';

	return containerElement;
}