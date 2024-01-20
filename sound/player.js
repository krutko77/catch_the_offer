import { OFFER_STATUSES, data, subscribe } from "../data/game.data.js";

export function Player() {
	const catchAudio = new Audio();
	catchAudio.src = 'assets/sounds/catch.wav'
	//catchAudio.play();

	let prevStatus = data.offerStatus;

	subscribe(() => {
		if (data.offerStatus === OFFER_STATUSES.caught && prevStatus !== OFFER_STATUSES.caught && data.settings.isMuted === true) {
			catchAudio.currentTime = 0;
			catchAudio.play();
		}

		prevStatus = data.offerStatus;
	})
}