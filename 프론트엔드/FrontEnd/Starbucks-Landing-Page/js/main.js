const searchEl = document.querySelector('.search');
const searchElInput = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchElInput.focus()
})

searchElInput.addEventListener('click', function() {
  searchElInput.focus()
})

searchElInput.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchElInput.setAttribute('placeholder', '통합검색');
})

searchElInput.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchElInput.setAttribute('placeholder', '');
})