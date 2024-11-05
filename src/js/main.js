document.querySelector('[data-code]').addEventListener('mouseenter', function () {
  document.querySelector('.district span').innerHTML = document.querySelector(
    this.getAttribute('data-title'),
  )
  document.querySelector('.district').style.display = 'block'
})

document.querySelector('[data-code]').addEventListener('mouseleave', function () {
  if (!document.querySelector('.ru-map').classList.contains('open')) {
    document.querySelector('.district').style.display = 'none'
  }
})

document.querySelector('[data-code]').addEventListener('click', function () {
  let id = document.querySelector(this).getAttribute('data-code')
  if (document.getElementById(id).innerText != '') {
    document.querySelector('.district').style.display = 'block'
    document.querySelector('.district span').innerHTML = `<a href='/${document.querySelector(
      this.getAttribute('data-title'),
    )}'>${document.querySelector(this.getAttribute('data-title'))}</a>`
    document.getElementById(id).style.display = 'block'
    setTimeout(
      function () {
        this.style.transition = 'opacity 0.5s ease-in-out'
        this.style.opacity = 1
      }.bind(this),
      20,
    )
  }
})
document.querySelectorAll('[data-code]').forEach(function (elem) {
  let id = elem.getAttribute('data-code')
  let title = elem.getAttribute('data-title')
  // if (document.getElementById(id).innerText != '') {
  //   document
  //     .querySelector('.district-links')
  //     .insertAdjacentHTML(
  //       'beforeend',
  //       '<div data-title="' + title + '" data-code="' + id + '">' + title + '</div>',
  //     )
  // }
})

// init Swiper:
const reviewsSwiper = new Swiper('.reviews_swiper', {
  slidesPerView: 2,
  spaceBetween: 40,
  centeredSlides: false,
  // slidesPerGroupSkip: 1,
  loop: false,
  lazy: true,
  ResizeObserver: false,
  // autoplay: {
  //   delay: 5500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    991: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.reviews_swiper_nav-next',
    prevEl: '.reviews_swiper_nav-prev',
  },
})

// init Swiper:
const newsSwiper = new Swiper('.news_swiper', {
  slidesPerView: 4,
  spaceBetween: 40,
  centeredSlides: false,
  loop: false,
  lazy: true,
  ResizeObserver: false,
  // autoplay: {
  //   delay: 5500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.news_swiper_nav-next',
    prevEl: '.news_swiper_nav-prev',
  },
})

// Accordion
const accordions = document.querySelectorAll('.accordion')
if (accordions.length > 0) {
  accordions.forEach((accordion, i) => {
    accordion.setAttribute('data-accordion-id', i)
    const accordionItems = accordion.querySelectorAll(`.accordion_item`)
    accordionItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('open')
      })
    })
    console.log(accordionItems)
  })
}
