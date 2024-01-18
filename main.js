import { Game } from './ui/game/game.component.js'
import { subscribe } from './data/game.data.js'
import { Player } from './sound/player.js'

Player();

// subscribe(renderApp);

const wrapperElement = document.getElementById('wrapper');


function renderApp() {
	const gameElement = Game();
	wrapperElement.innerHTML = "";
	wrapperElement.append(gameElement);
}

renderApp();