// данные для отрисовки элементов настройки
export const settingsData = [
	{
		title: 'Grid size',
		controlData: {
			selectId: 'gridSize',
			values: [3, 4, 5, 6, 7, 8],
			labels: ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8']
		}
	},
	{
		title: 'Points to win',
		controlData: {
			selectId: 'pointsToWin',
			values: [20, 30, 40, 60, 80, 100],
			labels: ['20 pts', '30 pts', '40 pts', '60 pts', '80 pts', '100 pts']
		}
	},
	{
		title: 'ms after the catch',
		controlData: {
			selectId: 'msAfterTheCatch',
			values: [200, 150, 120, 100, 80, 50],
			labels: ['200-100 ms', '180-80 ms', '150-70 ms', '130-50 ms', '110-30 ms', '100-10 ms']
		}
	},
	{
		title: 'Maximum misses',
		controlData: {
			selectId: 'maximumMisses',
			values: [3, 5, 7, 9, 11, 13],
			labels: [3, 5, 7, 9, 11, 13]
		}
	},
	{
		selectId: 'dataMuteMode',
		title: 'mute mode',
		controlData: {
			checkboxId: 'checkbox'
		}
	}
]
