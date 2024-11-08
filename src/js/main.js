const geoItems = document.querySelectorAll('[data-code]')
const geoLink = document.querySelector('.ru-map_link')
if (geoItems?.length > 0 && geoLink) {
  geoItems.forEach((item) => {
    if (item.getAttribute('data-has-link')) {
      item.addEventListener('click', function (e) {
        geoLink.setAttribute('href', item.getAttribute('data-has-link'))
        geoLink.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`)
        geoLink.classList.add('show')
        geoLink.innerText = e.currentTarget.getAttribute('data-title')
      })
    }
  })

  window.addEventListener('scroll', () => {
    geoLink.classList.remove('show')
  })
}

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
      slidesPerView: 1.4,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    992: {
      spaceBetween: 30,
    },
    1400: {
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
const swiper = new Swiper('.swiper_section_s', {
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
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.swiper_nav-next',
    prevEl: '.swiper_nav-prev',
  },
})

// init Swiper:
const safetySwiper = new Swiper('.safety_swiper', {
  slidesPerView: 1.4,
  spaceBetween: 20,
  centeredSlides: false,
  loop: false,
  lazy: true,
  ResizeObserver: false,
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1.4,
  //     spaceBetween: 20,
  //   },
  // },
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

// Collapsed Items
const collapsedItems = document.querySelectorAll('.collapsed')
if (collapsedItems?.length > 0) {
  collapsedItems.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('open')
    })
  })
}

// Show more
const showMore = document.querySelectorAll('[data-show-more]')
if (showMore?.length > 0) {
  showMore.forEach((el) => {
    const text = el.querySelector('.show-more_text')
    const btn = el.querySelector('.show-more_btn')
    if (el.getBoundingClientRect().height > el.getAttribute('data-show-more')) {
      text.classList.add('hide')
      btn.classList.add('show')
      btn.addEventListener('click', (e) => {
        text.classList.remove('hide')
        btn.classList.remove('show')
      })
    }
  })
}
