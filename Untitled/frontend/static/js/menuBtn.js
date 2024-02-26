const tabItem = document.querySelectorAll('.tabs__btn-item')
const tabContent = document.querySelectorAll('.tabs__content-item')
const svgItem = document.querySelectorAll('.tabs__btn-item-svg')

tabItem.forEach(function (element) {
	element.addEventListener('click', open)
})

function open(evt) {
	const tabTarget = evt.currentTarget
	const button = tabTarget.dataset.button

	tabItem.forEach(function (item) {
		item.classList.remove('tabs__btn-item--active')
	})

	tabTarget.classList.add('tabs__btn-item--active')

	tabContent.forEach(function (item) {
		item.classList.remove('tabs__content-item--active')
	})

	document
		.querySelector(`#${button}`)
		.classList.add('tabs__content-item--active')
}

svgItem.forEach(function (element) {
	element.addEventListener('click', clickSvg)
})

function clickSvg(evt) {
	const svgTarget = evt.currentTarget

	svgItem.forEach(function (item) {
		item.classList.remove('tabs__btn-item-svg--active')
	})

	svgTarget.classList.add('tabs__btn-item-svg--active')
}

const registerBtn = document.querySelectorAll('.registers__group-form-btn'),
	registerContent = document.querySelectorAll(
		'.registers__group-form-content-item'
	)

registerBtn.forEach(function (element) {
	element.addEventListener('click', registerOpen)
})

function registerOpen(event) {
	const registerBtnTarget = event.currentTarget
	const regButton = registerBtnTarget.dataset.id

	registerBtn.forEach(function (item) {
		item.classList.remove('registers__group-form-btn--active')
	})

	registerBtnTarget.classList.add('registers__group-form-btn--active')

	registerContent.forEach(function (item) {
		item.classList.remove('registers__group-form-content-item--active')
	})

	document
		.querySelector(`#${regButton}`)
		.classList.add('registers__group-form-content-item--active')
}
