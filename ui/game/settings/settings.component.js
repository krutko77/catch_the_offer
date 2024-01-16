import { Select } from './select/select.component.js';
import { Switch } from './switch/switch.component.js';

export function Settings(data) {
	const containerElement = document.createElement('div');
	containerElement.classList.add('settings');

	function renderSettingElement(data, controlType) {
		const SettingElement = document.createElement('div');
		SettingElement.classList.add('settings-item');
		const titleSettingElement = document.createElement('h2');
		titleSettingElement.textContent = data.title;

		let controlBlockElement = controlType;

		SettingElement.append(titleSettingElement, controlBlockElement);
		containerElement.append(SettingElement);
	}

	for (let i = 0; i < data.length; i++) {
		if (data[i].title !== 'mute mode') {
			let a = data[i];
			let b = Select(data[i].controlData);
			renderSettingElement(a, b);
		} else {
			let a = data[i];
			let b = Switch(data[i].controlData);
			renderSettingElement(a, b);
		}
	}

	return containerElement;
}