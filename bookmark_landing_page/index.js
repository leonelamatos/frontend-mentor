const navItems = document.querySelectorAll('.nav__item.feat');
const tabContent = document.querySelectorAll('.sections__tab--content');
const activeIndicator = document.getElementById('indicator');
const summaryArray = document.querySelectorAll('.detail-items details');
const arrows = document.querySelectorAll('.arrow');

navItems.forEach((item, indx) => {
	item.addEventListener('click', function () {
		removeClass();
		this.classList.add('active');
		activeIndicator.style.transform = `translateX(calc(100% * ${indx}))`;
		showTabContent(this.dataset.tab);
	});
});

function showTabContent(classname) {
	const documentTab = document.getElementById(`content-${classname}`);
	console.log(documentTab);
	documentTab.classList.add('active');
	documentTab.classList.remove('hidden');
}

function removeClass() {
	navItems.forEach((elem) => elem.classList.remove('active'));
	tabContent.forEach((content) => {
		content.classList.remove('active');
		content.classList.add('hidden');
	});
}

function changeOpenArrow() {
	// arrows.forEach((arrow) => arrow.for);
}

summaryArray.forEach((title) => {
	console.log(title);
	title.addEventListener('toggle', function () {
		const svg = this.nextElementSibling.querySelector('.arrow-path');
		if (this.open) {
			svg.style.stroke = 'hsl(0, 94%, 66%)';
			console.log(svg);
			// console.log(changeOpenArrow());
		} else {
			svg.style.stroke = '#5267DF';
			console.log('close');
		}
		// console.log(this.class == 'polyfill open');
	});
});

console.log('loaded');
