
export function createElementWithClass(tagName, ...classNames) {
	const element = document.createElement(tagName);
	classNames.forEach((c) => element.classList.add(c));
	return element;
}