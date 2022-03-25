// // const Joi = require('hapi-joi');

const navItems = document.querySelectorAll('.nav__item.feat');
const tabContent = document.querySelectorAll('.sections__tab--content');
// const activeIndicator = document.getElementById('indicator');
const activeIndicator = document.querySelector('.border-line');
const summaryArray = document.querySelectorAll('.detail-items details');
// const form = document.getElementById('form');
const emailInput = document.getElementById('email-input');
const emailInputError = document.getElementById('email-error-message');

const mobileHeader = document.getElementById('mobile-menu')
const pageHeader = document.getElementById('page-header')
const closeMobileButton = document.getElementById('mobile-header')
const hamMenuButton = document.getElementById('ham-menu')

console.log(closeMobileButton);

hamMenuButton.addEventListener('click', function () {
	mobileHeader.classList.add('active');
	pageHeader.classList.add('hide');
});
closeMobileButton.addEventListener('click', function(){
	pageHeader.classList.remove('hide');
	mobileHeader.classList.remove('active');

})

// Remove error class is the input is empty.
emailInput.addEventListener('input', function (e) {
	const hasErrorClass = emailInput.classList.contains('error');
	if ((e.target.value === '') & hasErrorClass) {
		this.classList.remove('error');
		emailInputError.classList.remove('error');
	}
});

// console.log(activeIndicator)

form.onsubmit = handleOnSubmit;

const schema = joi.object().keys({
	email: joi
		.string()
		.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
		.message("Whooops, make sure it's an email"),

	isEmailValid: joi.when('email', { is: joi.valid(true), then: joi.boolean().valid(true) }),
});

navItems.forEach((item, indx) => {
	item.addEventListener('click', function () {
		// activeIndicator.style.setProperty('--tabPosition',item.dataset.position)
		removeClass();
		this.classList.add('active');
		// activeIndicator.style.transform = `translateX(calc(100% * ${indx}))`;
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

summaryArray.forEach((title) => {
	title.addEventListener('toggle', function () {
		const svg = this.nextElementSibling.querySelector('.arrow-path');
		if (this.open) {
			svg.style.stroke = 'hsl(0, 94%, 66%)';
		} else {
			svg.style.stroke = '#5267DF';
		}
	});
});

function handleOnSubmit(event) {
	event.preventDefault();

	console.log(emailInput.value);
	const errorMessage = schema.validate({
		email: emailInput.value,
	});

	const isInvalid = errorMessage.hasOwnProperty('error');

	if (isInvalid) {
		emailInputError.innerText = errorMessage.error.message;

		emailInput.classList.add('error');
		emailInputError.classList.add('error');
	} else {
		emailInputError.innerText = '';

		emailInput.classList.remove('error');
		emailInputError.classList.remove('error-message');
	}
}
