import { Select } from './select/select.component.js';
import { Switch } from './switch/switch.component.js';
import { gridDimensions } from '../../../data/game.data.js';
import { pointsToWin } from '../../../data/game.data.js';
import { decreaseDeltaInMs } from '../../../data/game.data.js';
import { maximumMisses } from '../../../data/game.data.js';
import { isMuted } from '../../../data/game.data.js';
import { renderSettingElement } from './renderSettingsElement/renderSettingsElement.component.js';
import { createElementWithClass } from '../../../helpers.js';

export let containerElement;

// панель настроек
export function Settings(settingsData) {
	containerElement = createElementWithClass('div', 'settings');
	containerElement.id = 'settings';

	// создаем элементы панели настроек
	for (let i = 0; i < settingsData.length; i++) {
		if (settingsData[i].title !== 'mute mode') {
			let data = settingsData[i];
			let controlType = Select(settingsData[i].controlData);
			renderSettingElement(data, controlType);
		} else {
			let data = settingsData[i];
			let controlType = Switch(settingsData[i].controlData);
			renderSettingElement(data, controlType);
		}
	}
	return containerElement;
}

// назначаем подписчиков на клик элементов настроек
export function ListenersSettings() {
	const selectGridElement = document.getElementById('gridSize');
	selectGridElement.addEventListener('click', () => {
		gridDimensions(selectGridElement);
	});

	const selectPointsElement = document.getElementById('pointsToWin');
	selectPointsElement.addEventListener('click', () => {
		pointsToWin(selectPointsElement);
	});

	const selectMsAfterElement = document.getElementById('msAfterTheCatch');
	selectMsAfterElement.addEventListener('click', () => {
		decreaseDeltaInMs(selectMsAfterElement);
	});

	const selectMaxMissesElement = document.getElementById('maximumMisses');
	selectMaxMissesElement.addEventListener('click', () => {
		maximumMisses(selectMaxMissesElement);
	});

	const SwitchSettingElement = document.getElementById('checkbox');
	SwitchSettingElement.addEventListener('change', () => {
		isMuted(SwitchSettingElement);
	});
}

