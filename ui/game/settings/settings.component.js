import { Select } from './select/select.component.js';
import { Switch } from './switch/switch.component.js';
import { renderSettingElement } from './renderSettingsElement/renderSettingsElement.component.js';
import { createElementWithClass } from '../../../helpers.js';

export let containerElement;

// панель настроек
export function Settings(settingsData) {
	containerElement = createElementWithClass('div', 'settings');
	containerElement.id = 'settings';

	// создаем элементы панели настроек
	for (let i = 0; i < settingsData.length; i++) {
		if (settingsData[i].type === 'select') {
			let data = settingsData[i];
			let controlType = Select(settingsData[i].controlData);
			renderSettingElement(data, controlType);
			// назначаем подписчиков на клик элементов настроек
			controlType.addEventListener('change',  settingsData[i].onChange);

		} else {
			let data = settingsData[i];
			let controlType = Switch(settingsData[i].controlData);
			renderSettingElement(data, controlType);
			// назначаем подписчиков на клик элементов настроек
			controlType.addEventListener('change', settingsData[i].onChange);

		}
	}

	return containerElement;
}

// Отключаем все select в статусе game
export function changeStatusSelect() {
	const selectElements = Array.from(document.querySelectorAll(".select"));

	for (let i = 0; i < selectElements.length; i++) {
		selectElements[i].disabled = true;
	}

}

