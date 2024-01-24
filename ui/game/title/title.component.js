import { createElementWithClass } from "../../../helpers.js";

export function Title() {
	const containerElement = createElementWithClass('h1', 'title');
	containerElement.innerText = 'catch the offer!';
	containerElement.id = 'title';

	return containerElement;
}