// статусы App при разных режимах
export const APP_STATUSES = {
	start: 'start',
	game: 'game',
	youWin: 'youWin',
	youLose: 'youLose'
}

// статусы cell при отображении оффера
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
	appStatus: APP_STATUSES.start,
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

let subscribers = [] // массив подписчиков

// функция вызова каждого подписчика из массива
function notify() {
	subscribers.forEach(subscriber => subscriber());
}
// добавление нового подписчика в массив
export function subscribe(newSubscriber) {
	subscribers.push(newSubscriber);
}

// изменение данных data через настройки
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

export function isMuted(SwitchSettingElement) {
	if (SwitchSettingElement.checked) {
		data.settings.isMuted = true;
	} else {
		data.settings.isMuted = false;
	}
}

// изменение статуса App
export function changeAppStatus(appStatus, callback) {
	data.appStatus = appStatus;
	console.log(data.appStatus)

	callback();
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
	}, data.settings.decreaseDeltaInMs);

	moveOfferToRandomPosition();
	notify()
	clearInterval(stepIntervalId);
	runStepInterval();
}


function getRandom(N) {
	return Math.floor(Math.random() * (N + 1));
}
