const url = 'https://jsonplaceholder.typicode.com/photos'
const searchInput = document.querySelector('.search-favorit'),
	listFavorit = document.querySelector('.favorit-game__list')

let photo = []

fetch(url)
	.then(respons => respons.json())
	.then(data => {
		photo.push(...data)
	})
	.then(data => {
		const load = photo
			.map(photo => {
				return ` <li class="favorit-game__item">
								<img src="${photo.url}" alt="" class="favorit-game__img" />
								<h2 class="favorit-game__item-title">t</h2>
							</li>`
			})
			.slice(0, 9)
			.join('')

		listFavorit.innerHTML = load
	})
	.catch(error => console.error('Ошибка: ', error))

function getOptions(word, photo) {
	return photo.filter(s => {
		const regex = new RegExp(word, 'gi')
		return s.title.match(regex)
	})
}

searchInput.addEventListener('change', display)
searchInput.addEventListener('keyup', display)

function display() {
	const options = getOptions(this.value, photo)

	const html = options
		.map(photo => {
			return `
    <li class="favorit-game__item">
								<img src="${photo.url}" alt="" class="favorit-game__img" />
								<h2 class="favorit-game__item-title">t</h2>
							</li>
    `
		})
		.slice(0, 9)
		.join('')

	listFavorit.innerHTML = html
}
