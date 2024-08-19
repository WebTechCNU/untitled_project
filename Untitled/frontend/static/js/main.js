function checkUsernameAvailability(username) {
	var textOutput = document.querySelector('.checkNikname')

	let url = '/auth/check_login'

	let data = {
		username: username,
	}

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then(response => response.json())
		.then(data => {
			if (data.available) {
				textOutput.style.color = green
				textOutput.innerHTML = 'Нікнейм доступний!'
				return true
			} else {
				textOutput.style.color = red
				textOutput.innerHTML = 'Нікнейм вже зайнятий!'
				return false
			}
		})
		.catch(error => {
			console.error('Помилка:', error)
		})

	var password = document.getElementById('registration__pass').value,
		repeatPassword = document.getElementById('registration__RepeatPass').value,
		outputCheck = document.querySelector('.checkPass')
	if (password !== repeatPassword) {
		outputCheck.innerHTML = 'Passwords do not match!'
		outputCheck.style.color = 'red'
		return false
	} else {
		return true
	}
}

checkUsernameAvailability()
