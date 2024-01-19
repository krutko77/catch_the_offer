export function Switch(settingsData) {
	const container = document.createElement('label');
	container.classList.add('checkbox');
	container.htmlFor = 'checkbox';

	const inputSwitchSettingElement = document.createElement('input');
	inputSwitchSettingElement.classList.add('checkbox-input');
	inputSwitchSettingElement.type = 'checkbox';
	inputSwitchSettingElement.id = settingsData.checkboxId;
	const spanSwitchSettingElement = document.createElement('span');
	spanSwitchSettingElement.classList.add('checkbox-inner');

	container.append(inputSwitchSettingElement, spanSwitchSettingElement);

	return container;
}