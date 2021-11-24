const text = document.getElementById('textArea')

window.addEventListener('unload', () => {
    textJson = JSON.stringify(text.value)

    localStorage.setItem('text', textJson)
})

window.addEventListener('load', () => {
    textContent = JSON.parse(localStorage.getItem('text'))

    text.value = textContent
})