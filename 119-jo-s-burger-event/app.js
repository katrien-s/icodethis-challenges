const navElement = document.getElementById('nav');
const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
	navElement.classList.toggle('open');
});
