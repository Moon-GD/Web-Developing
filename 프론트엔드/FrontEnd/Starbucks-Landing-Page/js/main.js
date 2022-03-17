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

const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function() {
  /*
    throttle ? 
      lodash cdn을 통해 불러온 함수로써 _.throttle(콜백 함수, 지연 시간<밀리세컨드 단위>) 와 같이 사용할 수 있다.
   */
  if(window.scrollY > 500) {
    /*
      gsap.to(요소, 지속시간(s), 옵션)
     */
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display:'none'
    });
  }
  else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));