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

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 1, {
      delay: .7 * (index + 1), 
      opacity: 1
    })
})

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay:true,
  loop:true
})

new Swiper('.promotion .swiper-container', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides:true,
  loop:true,
  // autoplay: {
  //   delay:500
  // }
  pagination: {
    el:'.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable:true,  // 사용자의 페이지 제어 가능 여부
  },
  navigation: {
      prevEl: '.promotion .swiper-prev',
      nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  }
  else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});
