const geoItems = document.querySelectorAll('[data-code]')
const geoLink = document.querySelector('.ru-map_link')
if (geoItems?.length > 0 && geoLink) {
  let timer
  geoItems.forEach((item) => {
    if (item.getAttribute('data-has-link')) {
      let showedFlag = false
      item.addEventListener('mouseenter', function (e) {
        clearTimeout(timer)
        showedFlag = true
        geoLink.setAttribute('href', item.getAttribute('data-has-link'))
        geoLink.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`)
        geoLink.classList.add('show')
        geoLink.innerText = e.currentTarget.getAttribute('data-title')
      })
      item.addEventListener('mouseleave', function (e) {
        showedFlag = false
        timer = setTimeout(() => {
          if (!showedFlag) {
            console.log(showedFlag)
            geoLink.classList.remove('show')
          }
        }, 3000)
        // geoLink.setAttribute('href', item.getAttribute('data-has-link'))
        // geoLink.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`)
        // geoLink.innerText = e.currentTarget.getAttribute('data-title')
      })
    }
  })

  window.addEventListener('scroll', () => {
    geoLink.classList.remove('show')
  })
}

// Reviews Swiper:
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

// Safety Mobile Swiper:
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

// Swiper
const swipers = document.querySelectorAll('.swiper_section')
if (swipers?.length > 0) {
  swipers.forEach((swiper) => {
    const descPerView = swiper.getAttribute('data-desc-per-view') || 4
    const descSpaceBtw = swiper.getAttribute('data-desc-space-btw') || 40
    const tabPerView = swiper.getAttribute('data-tab-per-view') || 3
    const tabSpaceBtw = swiper.getAttribute('data-tab-space-btw') || 30
    const prev = swiper.querySelector('.swiper_nav-prev')
    const next = swiper.querySelector('.swiper_nav-next')

    const sw = new Swiper(swiper.querySelector('.swiper'), {
      slidesPerView: +descPerView,
      spaceBetween: +descSpaceBtw,
      centeredSlides: false,
      loop: false,
      lazy: true,
      ResizeObserver: false,
      breakpoints: {
        320: {
          slidesPerView: 1.4,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: +tabPerView,
          spaceBetween: +tabSpaceBtw,
        },
        1200: {
          slidesPerView: +descPerView,
          spaceBetween: +descSpaceBtw,
        },
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    })
  })
}

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
  })
}

// Collapsed Items
const collapsedItems = document.querySelectorAll('.collapsed')
if (collapsedItems?.length > 0) {
  collapsedItems.forEach((el) => {
    el.querySelector('.collapsed_head')?.addEventListener('click', (e) => {
      if (el.classList.contains('collapsed-onlymob') && window.innerWidth > 991) {
        return
      } else {
        el.classList.toggle('open')
      }
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

// Widget Links
const wLinks = document.querySelectorAll('.widget_links')
if (wLinks?.length > 0) {
  wLinks.forEach((widget) => {
    const wTrigger = widget.nextElementSibling
    let allLinks = widget.querySelectorAll('.widget_link')

    if (allLinks.length > 3) {
      widget.classList.add('hide')
      widget.querySelectorAll('.widget_link').forEach((lnk, i) => i > 2 && lnk.remove())
      widget.nextElementSibling.classList.add('show')
    }

    wTrigger &&
      wTrigger.addEventListener('click', (e) => {
        widget.classList.toggle('hide')
        if (widget.classList.contains('hide')) {
          widget.querySelectorAll('.widget_link').forEach((lnk, i) => i > 2 && lnk.remove())
          e.currentTarget.innerText = 'Показать полностью'
        } else {
          widget.innerHTML = ''
          allLinks.forEach((lnk) => widget.appendChild(lnk))
          e.currentTarget.innerText = 'Скрыть'
        }
      })
  })
}

// DropDowns
const dropDowns = document.querySelectorAll('[data-dropdown]')
const dropDownsTriggers = document.querySelectorAll('[data-dropdown-trigger]')
if (dropDowns?.length > 0 && dropDownsTriggers?.length > 0) {
  dropDowns.forEach((dropdown) => {
    const curTrigger = [...dropDownsTriggers].find(
      (trigger) =>
        trigger.getAttribute('data-dropdown-trigger') === dropdown.getAttribute('data-dropdown'),
    )
    if (curTrigger && !dropdown.classList.contains('dropdown-fw')) {
      dropdown.style.left = `${curTrigger.getBoundingClientRect().left}px`
    }
  })

  dropDownsTriggers.forEach((trigger) => {
    let dropDownFlag = false
    let timeout
    const curDropdown = [...dropDowns].find(
      (dropdown) =>
        trigger.getAttribute('data-dropdown-trigger') === dropdown.getAttribute('data-dropdown'),
    )
    trigger.addEventListener('mouseenter', (e) => {
      dropDownFlag = true
      clearTimeout(timeout)
      curDropdown.classList.add('show')
    })

    trigger.addEventListener('mouseleave', (e) => {
      dropDownFlag = false
      if (!dropDownFlag) {
        timeout = setTimeout(() => {
          curDropdown.classList.remove('show')
        }, 400)
      }
    })
    curDropdown.addEventListener('mouseenter', (e) => {
      dropDownFlag = true
      clearTimeout(timeout)
      e.currentTarget.classList.add('show')
    })
    curDropdown.addEventListener('mouseleave', (e) => {
      dropDownFlag = false
      if (!dropDownFlag) {
        timeout = setTimeout(() => {
          curDropdown.classList.remove('show')
        }, 50)
      }
    })
  })
}

// Search
const searchInputs = document.querySelectorAll('[data-search-trigger]')
const searchResults = document.querySelectorAll('[data-search]')
if (searchInputs?.length > 0 && searchResults?.length > 0) {
  searchInputs.forEach((search) => {
    const curResult = [...searchResults].find(
      (result) => search.getAttribute('data-search-trigger') === result.getAttribute('data-search'),
    )
    if (curResult) {
      const resultItems = curResult.querySelectorAll('.search_item')
      let founded = false
      search.addEventListener('input', (e) => {
        founded = false
        resultItems.forEach((el) => {
          el.classList.add('hide')
          if (e.currentTarget.value === '') {
            curResult.classList.remove('notFound')
            el.classList.remove('hide')
            founded = true
          } else if (
            el.getAttribute('data-search-symbol').toLowerCase() ===
            e.currentTarget.value.toLowerCase()[0]
          ) {
            el.classList.remove('hide')
            curResult.classList.remove('notFound')
            founded = true
          }
        })
        if (!founded) {
          curResult.classList.add('notFound')
        }
      })
    }
  })
}

// Drawer
const burgerTrigger = document.querySelector('.burger')
const body = document.querySelector('.body')
const drawer = document.querySelector('.drawer')

if (burgerTrigger && body && drawer) {
  burgerTrigger.addEventListener('click', (e) => {
    body.classList.toggle('noscroll')
    drawer.classList.toggle('show')
  })
}

// Nums Counters
const counters = document.querySelectorAll('.nums_item_num')
const speed = 10
let options = {
  // root: document.querySelector('.nums'),
  rootMargin: '5px',
  threshold: 0.5,
}
const trueCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-nums-target'))
      const increment = Math.trunc(target / speed)
      const updateCount = () => {
        const count = parseInt(entry.target.innerText)

        if (count < target) {
          entry.target.innerText = count + increment
          setTimeout(updateCount, 130)
        } else {
          entry.target.innerText = target
        }
      }
      updateCount()
    }
  })
}
const observer = new IntersectionObserver(trueCallback, options)
counters.forEach((counter) => {
  observer.observe(counter)
})

// Forms
const forms = document.querySelectorAll('.form')
console.log(forms)

if (forms?.length > 0) {
  forms.forEach((form) => {
    console.log(form)

    form.addEventListener('submit', (e) => {
      e.preventDefault()
    })
  })
}

// input phone mask
const input = document.querySelector('.tel')

const prefixNumber = (str) => {
  if (str === '7') {
    return '7 ('
  }
  if (str === '8') {
    return '8 ('
  }
  if (str === '9') {
    return '7 (9'
  }
  return '7 ('
}

// ======================================
input.addEventListener('input', (e) => {
  const value = input.value.replace(/\D+/g, '')
  const numberLength = 11

  let result
  if (input.value.includes('+8') || input.value[0] === '8') {
    result = ''
  } else {
    result = '+'
  }

  //
  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        result += prefixNumber(value[i])
        continue
      case 4:
        result += ') '
        break
      case 7:
        result += '-'
        break
      case 9:
        result += '-'
        break
      default:
        break
    }
    result += value[i]
  }
  //
  input.value = result
})
// ======================================
