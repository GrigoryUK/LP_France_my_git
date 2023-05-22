export default function () {
	const container = document.querySelector('.mainpage-form');
	if (container) {
		const answerGeorgia = document.querySelector('#georgia')
		const answerArmeniya = document.querySelector('#armenia')
		const buttonsCloseAnswer = document.querySelectorAll('.btn-close--answer')
		const answerLinkArmeniya = document.querySelector(
			'[data-country="armenia"]'
		)
		const answerLinkGeorgia = document.querySelector('[data-country="georgia"]')

		answerGeorgia.addEventListener('click', function () {
			// event.preventDefault();
			// window.scrollTo(0, 500);
			container.classList.add('display-none')
			answerLinkGeorgia.classList.remove('display-none')
		})

		answerArmeniya.addEventListener('click', function () {
			// event.preventDefault();
			container.classList.add('display-none')
			answerLinkArmeniya.classList.remove('display-none')
		})

		buttonsCloseAnswer.forEach((button) => {
			button.addEventListener('click', (el) => {
				answerLinkGeorgia.classList.add('display-none')
				answerLinkArmeniya.classList.add('display-none')
				container.classList.remove('display-none')
			})
		})
	}
}
