import { data } from "../../../data/game.data.js";
import { Cell } from "./cell/cell.component.js";

// сетка игрового поля
export function Grid() {
	const containerElement = document.createElement('table');

	console.log('data.settings.rowsCount', data.settings.rowsCount)
	console.log('data.settings.columnsCount', data.settings.columnsCount)

	for (let y = 0; y < data.settings.rowsCount; y++) {
		const row = document.createElement('tr');

		for (let x = 0; x < data.settings.columnsCount; x++) {

			const cell = Cell(x, y);
			row.append(cell);
		}

		containerElement.append(row);
	}


	return containerElement;
}

