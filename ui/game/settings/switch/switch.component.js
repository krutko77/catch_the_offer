import { createElementWithClass } from "../../../../helpers.js";

export function Switch(settingsData) {
	const container = document.createElement('label');
	container.classList.add('checkbox');
	container.htmlFor = 'checkbox';

	const inputSwitchSettingElement = createElementWithClass('input', 'checkbox-input');
	inputSwitchSettingElement.type = 'checkbox';
	inputSwitchSettingElement.id = settingsData.checkboxId;
	inputSwitchSettingElement.checked = true;
	const spanSwitchSettingElement = createElementWithClass('span', 'checkbox-inner');

	container.append(inputSwitchSettingElement, spanSwitchSettingElement);

	return container;
}