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

// статусы финала
export const FINAL_STATUSES = {
	default: 'default',
	victory: 'victory',
	loss: 'loss'
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
	finalStatus: FINAL_STATUSES.default,
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
	},
	gameDuration: {
		seconds: 0,
		minutes: 0
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

// вычисляем рандомное число
function getRandom(N) {
	return Math.floor(Math.random() * (N + 1));
}

// Создаем объекты Date для начала и конца игры
let startTime = null;
let endTime = null;

// Функция для запуска таймера при начале игры
export function startTimer() {
	if (data.appStatus === APP_STATUSES.game) {
		// Запоминаем время начала игры
		startTime = new Date();
	}
}

// Функция для остановки таймера при окончании игры
function stopTimer() {
	// Запоминаем время окончания игры
	endTime = new Date();
}

// остановка перемещений оффера и таймера
export function stopOffer() {
	clearInterval(stepIntervalId);
	stopTimer();
	calculateTime();
}

// вычисляем время игры
function calculateTime() {
	// Вычисляем разницу между началом и окончанием игры в миллисекундах
	if (startTime && endTime) {
		const durationInMilliseconds = endTime - startTime;
		// Преобразуем продолжительность в минуты и секунды
		// Продолжительность в секундах
		const durationInSeconds = Math.floor(durationInMilliseconds / 1000);
		// Минуты
		data.gameDuration.minutes = Math.floor(durationInSeconds / 60);
		// Остаток секунд
		data.gameDuration.seconds = durationInSeconds % 60;
	}
}

// очищаем счетчик
export function clearScores() {
	data.score.caughtCount = 0;
	data.score.missCount = 0;
}

// изменение статуса финала
export function changeFinalStatus(caughtCount, missCount) {
	if (caughtCount === data.settings.pointsToWin) {
		data.finalStatus = FINAL_STATUSES.victory;
	}
	if (missCount === data.settings.maximumMisses) {
		data.finalStatus = FINAL_STATUSES.loss;
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
	data.gameDuration.seconds = 0;
	data.gameDuration.minutes = 0;
}


