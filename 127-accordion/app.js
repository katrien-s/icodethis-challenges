const detailsElements = document.querySelectorAll('details');

function handleClickOnDetails() {
	let detailsOpened = document.querySelectorAll('details[open]');

	for (const item of detailsOpened) {
		if (this != item) {
			item.removeAttribute('open');
		}
	}
}

detailsElements.forEach((item) => {
	item.addEventListener('click', handleClickOnDetails);
});
