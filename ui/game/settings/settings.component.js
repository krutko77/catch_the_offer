export function Settings() {
	const containerElement = document.createElement('div');
	containerElement.classList.add('settings');

	function renderSettingElement(data) {
		const SettingElement = document.createElement('div');
		SettingElement.classList.add('settings-item');
		const titleSettingElement = document.createElement('h2');
		titleSettingElement.textContent = data.title;
		const wrapperSelectSettingElement = document.createElement('div');
		wrapperSelectSettingElement.classList.add('select-wrapper');
		const selectSettingElement = document.createElement('select');
		selectSettingElement.classList.add('select');
		selectSettingElement.id = data.selectId;

		for (let i = 0; i < data.values.length; i++) {
			const selectItem = document.createElement('option');
			selectItem.value = data.values[i];
			let label = data.labels[i];
			selectItem.append(label);
			selectSettingElement.append(selectItem);
		}

		wrapperSelectSettingElement.append(selectSettingElement);
		SettingElement.append(titleSettingElement, wrapperSelectSettingElement);
		containerElement.append(SettingElement);
	}

	const dataGridSize = {
		selectId: 'gridSize',
		title: 'Grid size',
		values: [3, 4, 5, 6, 7, 8],
		labels: ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8']
	}

	const dataPointsToWin = {
		selectId: 'pointsToWin',
		title: 'Points to win',
		values: [20, 30, 40, 60, 80, 100],
		labels: ['20 pts', '30 pts', '40 pts', '60 pts', '80 pts', '100 pts']
	}

	const dataMsAfterTheCatch = {
		selectId: 'msAfterTheCatch',
		title: 'ms after the catch',
		values: [200, 180, 150, 130, 110, 100],
		labels: ['200-100 ms', '180-80 ms', '150-70 ms', '130-50 ms', '110-30 ms', '100-10 ms']
	}

	const dataMaximumMisses = {
		selectId: 'maximumMisses',
		title: 'Maximum misses',
		values: [3, 5, 7, 9, 11, 13],
		labels: [3, 5, 7, 9, 11, 13]
	}

	renderSettingElement(dataGridSize);

	renderSettingElement(dataPointsToWin);

	renderSettingElement(dataMsAfterTheCatch);

	renderSettingElement(dataMaximumMisses);

	renderSettingElement(dataMaximumMisses);

	return containerElement;
}