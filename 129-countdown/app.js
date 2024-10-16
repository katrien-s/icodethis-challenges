const deadline = document.querySelector('.countdown');
const items = document.querySelectorAll('h4');

// to have the app running each time we load with a coundtowdn of 10 days
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 8, 24, 10, 0, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = ('0' + futureDate.getMinutes()).slice(-2);
const date = futureDate.getDate();
const seconds = futureDate.getSeconds();

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
	const currentDate = new Date().getTime();
	const t = futureTime - currentDate;
	// 1s = 1000ms
	// 1m = 60s
	// 1h = 60min
	// 1 day = 24h

	// values in ms
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	let days = Math.floor(t / oneDay);
	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMinute);
	let seconds = Math.floor((t % oneMinute) / 1000);

	// set values array
	const values = [days, hours, minutes, seconds];

	function format(item) {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	}

	items.forEach(function (item, index) {
		item.innerHTML = format(values[index]);
	});

	if (t < 0) {
		clearInterval(countdown);
		deadline.innerHTML = `<h4 class='expired'>This giveaway has expired<h4>`;
	}
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
