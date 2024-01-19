import { Select } from './select/select.component.js';
import { Switch } from './switch/switch.component.js';
import { gridDimensions } from '../../../data/game.data.js';
import { pointsToWin } from '../../../data/game.data.js';
import { decreaseDeltaInMs } from '../../../data/game.data.js';
import { maximumMisses } from '../../../data/game.data.js';

export function Settings(settingsData) {
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

export function changeSettings() {
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

}

