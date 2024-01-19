import { data } from "../../../data/game.data.js";
import { Cell } from "./cell/cell.component.js";

export function Grid() {
	const containerElement = document.createElement('table');

	for (let y = 0; y < data.settings.rowsCount; y++) {
		const row = document.createElement('tr');
		console.log(data.settings.rowsCount)

		for (let x = 0; x < data.settings.columnsCount; x++) {

			console.log(data.settings.columnsCount)

			const cell = Cell(x, y);
			row.append(cell);
		}

		containerElement.append(row);
	}


	return containerElement;
}

