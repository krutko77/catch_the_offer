import { gridDimensions, pointsToWin, decreaseDeltaInMs, maximumMisses, isMuted } from './game.data.js';

// данные для отрисовки элементов настройки
export const settingsData = [
	{
		title: 'Grid size',
		type: 'select',
		controlData: {
			selectId: 'gridSize',
			values: [3, 4, 5, 6, 7, 8],
			labels: ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'],
		},
		onChange: (e) => {
			console.log(e.target.value)
			gridDimensions(Number(e.target.value));
		}
	},
	{
		title: 'Points to win',
		type: 'select',
		controlData: {
			selectId: 'pointsToWin',
			values: [20, 30, 40, 60, 80, 100],
			labels: ['20 pts', '30 pts', '40 pts', '60 pts', '80 pts', '100 pts']
		},
		onChange: (e) => {
			pointsToWin(Number(e.target.value));
		}
	},
	{
		title: 'ms after the catch',
		type: 'select',
		controlData: {
			selectId: 'msAfterTheCatch',
			values: [100, 80, 70, 50, 30, 10],
			labels: ['200-100 ms', '180-80 ms', '150-70 ms', '130-50 ms', '110-30 ms', '100-10 ms']
		},
		onChange: (e) => {
			decreaseDeltaInMs(Number(e.target.value));
		}
	},
	{
		title: 'Maximum misses',
		type: 'select',
		controlData: {
			selectId: 'maximumMisses',
			values: [3, 5, 7, 9, 11, 13],
			labels: [3, 5, 7, 9, 11, 13]
		},
		onChange: (e) => {
			maximumMisses(Number(e.target.value));
		}
	},
	{
		title: 'mute mode',
		type: 'checkbox',
		controlData: {
			checkboxId: 'checkbox'
		},
		onChange: (e) => {
			isMuted(e.currentTarget);
		}
	}
]