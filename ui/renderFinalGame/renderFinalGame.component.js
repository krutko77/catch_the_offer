import { containerElement } from "../renderStartGame/renderStartGame.component.js";
import { FinalCard } from "../game/finalCard/finalCard.component.js";
import { finalCardData } from "../../data/game.data.js";

export function renderFinalGame() {
	containerElement.innerHTML = '';
	const finalElement = FinalCard(finalCardData);
	containerElement.append(finalElement);
}