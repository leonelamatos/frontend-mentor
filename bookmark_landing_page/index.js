// // const Joi = require('hapi-joi');

const navItems = document.querySelectorAll('.nav__item.feat');
const tabContent = document.querySelectorAll('.sections__tab--content');
const activeIndicator = document.getElementById('indicator');
const summaryArray = document.querySelectorAll('.detail-items details');
// const form = document.getElementById('form');
const emailInput = document.getElementById('email-input');
const emailInputError = document.getElementById('email-error-message');

// // form.onsubmit = handleOnSubmit;

// const schema = joi.object().keys({
// 	email: joi
// 		.string()
// 		.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
// 		.message("Whooops, make sure it's an email"),

// 	isEmailValid: joi.when('email', { is: joi.valid(true), then: joi.boolean().valid(true) }),
// });

navItems.forEach((item, indx) => {
	item.addEventListener('click', function () {
		console.log(item);
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

// summaryArray.forEach((title) => {
// 	title.addEventListener('toggle', function () {
// 		const svg = this.nextElementSibling.querySelector('.arrow-path');
// 		if (this.open) {
// 			svg.style.stroke = 'hsl(0, 94%, 66%)';
// 		} else {
// 			svg.style.stroke = '#5267DF';
// 		}
// 	});
// });

// // function handleOnSubmit(event) {
// // 	event.preventDefault();
// // 	const errorMessage = schema.validate({
// // 		email: emailInput.value,
// // 	});

// // 	const isInvalid = errorMessage.hasOwnProperty('error');

// // 	if (isInvalid) {
// // 		emailInputError.innerText = errorMessage.error.message;

// // 		emailInput.classList.add('error');
// // 		emailInputError.classList.add('error-message');
// // 	} else {
// // 		emailInputError.innerText = '';

// // 		emailInput.classList.remove('error');
// // 		emailInputError.classList.remove('error-message');
// // 	}
// // }
