import { containerElement } from './../settings.component.js';
import { createElementWithClass } from '../../../../helpers.js';

export function renderSettingElement(data, controlType) {
	const SettingElement = createElementWithClass('div', 'settings-item')
	const titleSettingElement = document.createElement('h2');
	titleSettingElement.textContent = data.title;

	let controlBlockElement = controlType; // select или switch

	SettingElement.append(titleSettingElement, controlBlockElement);
	containerElement.append(SettingElement);
}