// Toggle hamburger menu
$('#hamburger-icon').on('click', () => {
  $('#nav-container').slideToggle('fast', function () {
    $('.hamburger-menu').toggleClass(
      'expanded',
      $('#nav-container').is(':visible')
    )
    $('#hamburger-icon').attr(
      'src',
      $('#nav-container').is(':visible')
        ? '../images/close.svg'
        : '../images/hamburger.svg'
    )
  })
  $('#main').toggle()
})

// Hamburger menu > over-ons accordion toggle
$('.accordion-header').on('click', function () {
  const accordionContent = $(this).next('.accordion-content')
  const accordionIcon = $(this).find('.accordion-icon')

  accordionContent.slideToggle('fast')
  accordionIcon.toggleClass('active')
})

// Toggle search box
$('#search-button').on('click', () => {
  $('#search-box').toggleClass('open')
})

$('#hamburger-search-button').on('click', () => {
  $('#search-box').toggleClass('open')
})

// Carousel
const track = $('#carousel')
const slides = Array.from(track.children())

// Set slide position
slides.forEach((slide, index) => {
  slide.style.left = `${window.innerWidth * index}px`
})

const moveToSlide = (track, currentSlide, targetSlide) => {
  const amountToMove = targetSlide.css('left')
  track.css('transform', `translateX(-${amountToMove})`)
  currentSlide.removeClass('current-slide')
  targetSlide.addClass('current-slide')
}

$('.carousel__slide__container__footer .next-button').on('click', () => {
  const currentSlide = $('#carousel .current-slide')
  const nextSlide = currentSlide.next()

  moveToSlide(track, currentSlide, nextSlide)
  if (nextSlide.next().length === 0) {
    // No next slide, disable the next button
    $('.carousel__slide__container__footer .next-button').prop('disabled', true)
    $('.carousel__slide__container__footer .prev-button').prop(
      'disabled',
      false
    )
  }
})

$('.carousel__slide__container__footer .prev-button').on('click', () => {
  const currentSlide = $('#carousel .current-slide')
  const prevSlide = currentSlide.prev()
  moveToSlide(track, currentSlide, prevSlide)
  if (prevSlide.prev().length === 0) {
    // No prev slide, disable the prev button
    $('.carousel__slide__container__footer .prev-button').prop('disabled', true)
    $('.carousel__slide__container__footer .next-button').prop(
      'disabled',
      false
    )
  }
})
