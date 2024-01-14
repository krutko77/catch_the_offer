

export function Settings() {
	const containerElement = document.createElement('div');
	containerElement.classList.add('settings');

	function renderCellElement(containerElement, selectId, title, values, labels) {
		const cellElement = document.createElement('div');
		cellElement.classList.add('settings-item');
		const titleCellElement = document.createElement('h2');
		titleCellElement.textContent = title;
		const selectCellElement = document.createElement('select');
		selectCellElement.classList.add('select');
		selectCellElement.id = selectId;
		for (let i = 0; i < 6; i++) {
			const selectItem = document.createElement('option');
			selectItem.value = values[i];
			let label = labels[i];
			selectItem.append(label);
			selectCellElement.append(selectItem);
		}
		cellElement.append(titleCellElement, selectCellElement);
		containerElement.append(cellElement);
	}

	renderCellElement(containerElement, 'gridSize', 'Grid size', [3, 4, 5, 6, 7, 8], ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8']);

	renderCellElement(containerElement, 'pointsToWin', 'Points to win', [20, 30, 40, 60, 80, 100], ['20 pts', '30 pts', '40 pts', '60 pts', '80 pts', '100 pts']);

	renderCellElement(containerElement, 'msAfterTheCatch', 'ms after the catch', [200, 180, 150, 130, 110, 100], ['200-100 ms', '180-80 ms', '150-70 ms', '130-50 ms', '110-30 ms', '100-10 ms']);

	renderCellElement(containerElement, 'maximumMisses', 'Maximum misses', [3, 5, 7, 9, 11, 13], [3, 5, 7, 9, 11, 13]);

	renderCellElement(containerElement, 'maximumMisses', 'Maximum misses', [3, 5, 7, 9, 11, 13], [3, 5, 7, 9, 11, 13]);

	return containerElement;
}