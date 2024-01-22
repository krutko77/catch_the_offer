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

// статус FinalCard
export const FINALCARD_STATUSES = {
	youWin: 'You Win',
	youLose: 'You Lose'
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

export const finalCardData = {
	title: 'You Win!',
	label: 'Congratulations',
	sumCatch: 0,
	sumMiss: 0,
	sumTime: 0,
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
export function gridDimensions(selectGridElement) {
	data.settings.rowsCount = Number(selectGridElement.value);
	data.settings.columnsCount = Number(selectGridElement.value);
}

export function pointsToWin(selectPointsElement) {
	data.settings.pointsToWin = Number(selectPointsElement.value);
}

export function decreaseDeltaInMs(selectMsAfterElement) {
	data.settings.decreaseDeltaInMs = Number(selectMsAfterElement.value);
}

export function maximumMisses(selectMaxMissesElement) {
	data.settings.maximumMisses = Number(selectMaxMissesElement.value);
}

export function isMuted(SwitchSettingElement) {
	if (SwitchSettingElement.checked) {
		data.settings.isMuted = true;
	} else {
		data.settings.isMuted = false;
	}
}

// изменение статуса App
export function changeAppStatus(appStatus, renderApp) {
	data.appStatus = appStatus;
	console.log(renderApp)
	renderApp();
}

// перемещение оффера
let stepIntervalId;

// начало игры, перемещение оффера
function runStepInterval() {

	stepIntervalId = setInterval(() => {
		missOffer();
		moveOfferToRandomPosition(true);
		notify();
	}, 2000);
}

// интервал перед началом игры
setTimeout(() => {
	runStepInterval();
}, 2000);

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

export function stopOffer() {
	clearInterval(stepIntervalId);
}

function getRandom(N) {
	return Math.floor(Math.random() * (N + 1));
}

// изменение данных FinalCard
export function changeDataFinalCard(caughtCount, missCount) {
	if (caughtCount === data.settings.pointsToWin) {

		finalCardData.sumCatch = caughtCount;
		finalCardData.sumMiss = missCount;
		finalCardData.sumTime = 20;
		finalCardData.iconSrc = 'assets/images/yuo-win-icon.svg';

	}
	if (missCount === data.settings.maximumMisses) {

		finalCardData.title = 'You Lose!';
		finalCardData.label = "You'll be lucky next time";
		finalCardData.sumCatch = caughtCount,
			finalCardData.sumMiss = missCount,
			finalCardData.sumTime = 20,
			finalCardData.iconSrc = 'assets/images/yuo-lose-icon.svg'
	}

}


