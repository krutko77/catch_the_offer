export function Select(data) {
	const container = document.createElement('div');
	container.classList.add('select-wrapper');
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

	container.append(selectSettingElement);

	return container;
}