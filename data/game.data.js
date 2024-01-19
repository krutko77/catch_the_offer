export const OFFER_STATUSES = {
	default: 'default',
	miss: 'miss',
	caught: 'caught'
}

export const data = {
	// array for cells: cell = {x,y}
	settings: {
		rowsCount: 3,
		columnsCount: 3,
		pointsToWin: 20,
		maximumMisses: 3,
		decreaseDeltaInMs: 100,
		isMuted: true
	},
	offerStatus: OFFER_STATUSES.default,
	coords: {
		current: {
			x: 1,
			y: 0
		},
		previous: {
			x: 1,
			y: 2,
		}
	},
	score: {
		missCount: 0,
		caughtCount: 0
	}
}

let subscribers = []

function notify() {
	subscribers.forEach(subscriber => subscriber());
}

export function subscribe(newSubscriber) {
	subscribers.push(newSubscriber);
	/* console.log(subscribers.length) */
}

// изменение данных через настройки
export function gridDimensions(selectGridElement) {
	data.settings.rowsCount = Number(selectGridElement.value);
	data.settings.columnsCount = Number(selectGridElement.value);
}

export function pointsToWin(selectPointsElement) {
	data.settings.pointsToWin = Number(selectPointsElement.value);

	console.log("win", data.settings.pointsToWin)
}

export function decreaseDeltaInMs(selectMsAfterElement) {
	data.settings.decreaseDeltaInMs = Number(selectMsAfterElement.value);

	console.log("ms", data.settings.decreaseDeltaInMs)
}

export function maximumMisses(selectMaxMissesElement) {
	data.settings.maximumMisses = Number(selectMaxMissesElement.value);

	console.log("maxMiss", data.settings.maximumMisses)
}






let stepIntervalId;

function runStepInterval() {
	stepIntervalId = setInterval(() => {
		missOffer();
		moveOfferToRandomPosition(true);
		notify();
	}, 2000);
}

runStepInterval();

function moveOfferToRandomPosition() {
	let newX = null;
	let newY = null;

	do {
		newX = getRandom(data.settings.columnsCount - 1);
		newY = getRandom(data.settings.rowsCount - 1);
	} while (data.coords.current.x === newX && data.coords.current.y === newY)

	data.coords.current.x = newX;
	data.coords.current.y = newY;
}

function missOffer() {
	data.offerStatus = OFFER_STATUSES.miss;
	data.score.missCount++;

	data.coords.previous = {
		...data.coords.current
	};
	setTimeout(() => {
		data.offerStatus = OFFER_STATUSES.default;
		notify();
	}, 200);
}

export function catchOffer() {
	data.offerStatus = OFFER_STATUSES.caught;
	data.score.caughtCount++;
	data.coords.previous = {
		...data.coords.current
	};
	setTimeout(() => {
		data.offerStatus = OFFER_STATUSES.default;
		notify();
	}, 200);

	moveOfferToRandomPosition();
	notify()
	clearInterval(stepIntervalId);
	runStepInterval();
}


function getRandom(N) {
	return Math.floor(Math.random() * (N + 1));
}
