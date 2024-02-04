// статусы App при разных режимах
export const APP_STATUSES = {
	start: 'start',
	game: 'game',
	final: 'final'
}

// статусы cell при отображении оффера
export const OFFER_STATUSES = {
	default: 'default',
	miss: 'miss',
	caught: 'caught'
}

// общие данные
export const data = {
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

// данные для finalCardData 
export const finalCardData = {
	title: 'You Win!',
	label: 'Congratulations',
	sumCatch: 0,
	sumMiss: 0,
	minutes: 0,
	seconds: 0,
	iconSrc: 'assets/images/yuo-win-icon.svg'
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
export function gridDimensions(value) {
	data.settings.rowsCount = value;	
	data.settings.columnsCount = value;
}

export function pointsToWin(value) {
	data.settings.pointsToWin = value;
}

export function decreaseDeltaInMs(value) {
	data.settings.decreaseDeltaInMs = value;
}

export function maximumMisses(value) {
	data.settings.maximumMisses = value;
}

export function isMuted(checkbox) {
	if (checkbox.checked) {
		data.settings.isMuted = true;
	} else {
		data.settings.isMuted = false;
	}
}

// изменение статуса App
export function changeAppStatus(appStatus, renderApp) {
	data.appStatus = appStatus;
	renderApp();
	if (data.appStatus === APP_STATUSES.game) { }
	runStepInterval();
}

// делаем доступной функцию setInterval()
let stepIntervalId;

// начало игры, перемещение оффера 
export function runStepInterval() {
	if (data.appStatus === APP_STATUSES.game) {
		stepIntervalId = setInterval(() => {
			missOffer();
			moveOfferToRandomPosition(true);
			notify();
		}, 2000);
	}
}

// определение рамдомных координат для оффера с проверкой
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

// если оффер не поймали
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

// если оффер поймали
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

let gameTimerId;

// таймер игры
export function GameTimer() {
	//data.startDAte = new Date();
	if (data.appStatus === APP_STATUSES.game) {
		gameTimerId = setInterval(() => {
			finalCardData.seconds++;
		}, 1000);

		if (finalCardData.seconds >= 60) {
			finalCardData.minutes++;
			finalCardData.seconds = 0;
		}
	}
}

// оставка перемещений оффера и таймера
export function stopOffer() {
	clearInterval(stepIntervalId);
	clearInterval(gameTimerId);
}

// очищаем счетчик
export function clearScores() {
	data.score.caughtCount = 0;
	data.score.missCount = 0;
}

// изменение данных FinalCard
export function changeDataFinalCard(caughtCount, missCount) {
	if (caughtCount === data.settings.pointsToWin) {
		finalCardData.sumCatch = caughtCount;
		finalCardData.sumMiss = missCount;
		finalCardData.iconSrc = 'assets/images/yuo-win-icon.svg';
	}
	if (missCount === data.settings.maximumMisses) {
		finalCardData.title = 'You Lose!';
		finalCardData.label = "You'll be lucky next time";
		finalCardData.sumCatch = caughtCount,
			finalCardData.sumMiss = missCount,
			finalCardData.iconSrc = 'assets/images/yuo-lose-icon.svg'
	}

}

// приведерие всех настроек к начальному состоянию
export function resetSettings() {
	data.settings.rowsCount = 3;
	data.settings.columnsCount = 3;
	data.settings.pointsToWin = 20;
	data.settings.maximumMisses = 3;
	data.settings.decreaseDeltaInMs = 100;
	data.settings.isMuted = true;
}

// обнуление таймера
export function resetTimer() {
	finalCardData.minutes = 0;
	finalCardData.seconds = 0;
}


