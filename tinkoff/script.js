document.querySelector('.card__form__btn').addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector('.card__submit-message').classList.add('active')
    document.querySelector('.card__form').classList.add('hide')
    document.querySelector('.card__privacy').classList.add('hide')
})