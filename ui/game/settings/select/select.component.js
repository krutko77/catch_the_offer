import { createElementWithClass } from "../../../../helpers.js";

export function Select(settingsData) {
	const container = createElementWithClass('div', 'select-wrapper');

	const selectSettingElement = createElementWithClass('select', 'select');
	selectSettingElement.id = settingsData.selectId;

	for (let i = 0; i < settingsData.values.length; i++) {
		const selectItem = document.createElement('option');
		selectItem.value = settingsData.values[i];
		let label = settingsData.labels[i];
		selectItem.append(label);
		selectSettingElement.append(selectItem);
	}

	container.append(selectSettingElement);

	return container;
}