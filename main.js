import { Game } from './ui/game/game.component.js'
import { subscribe } from './data/game.data.js'
import { Player } from './sound/player.js'

Player();

//subscribe(renderApp);

const wrapperElement = document.getElementById('wrapper');
const gameElement = Game();

function renderApp() {
	wrapperElement.innerHTML = "";
	wrapperElement.append(gameElement);
}

renderApp();