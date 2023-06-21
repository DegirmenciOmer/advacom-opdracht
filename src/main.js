// Toggle hamburger menu
$('#hamburger-icon').on('click', () => {
  $('#nav-container').toggle()
  $('#main').toggle()

  if ($('#nav-container').is(':visible')) {
    $('.hamburger-menu').addClass('expanded')
    $('#hamburger-icon').attr('src', '../images/close.svg')
  } else {
    $('.hamburger-menu').removeClass('expanded')
    $('#hamburger-icon').attr('src', '../images/hamburger.svg')
  }
})

// Toggle search box

$('#search-button').on('click', () => {
  $('#search-box').toggle()
})

$('#hamburger-search-button').on('click', () => {
  $('#search-box').toggle()
})

// $('#slideContent').html(`
// <h1>${slideContent[0].title.replace(/\n/g, '<br>')}</h1>
// <h2>${slideContent[0].secondaryTitle}</h2>
// <p>${slideContent[0].secondaryTitle}</p>
// `)

// Carousel
const track = $('#carousel')
const slides = Array.from(track.children())

// const slideWidth = slides[0].getBoundingClientRect().width
// console.log(slideWidth, window.innerWidth)

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

  if (nextSlide.length === 0) {
    // No next slide, disable the next button
    $('.carousel__slide__container__footer .next-button').prop('disabled', true)
  } else {
    // Move to the next slide
    moveToSlide(track, currentSlide, nextSlide)
    $('.carousel__slide__container__footer .prev-button').prop(
      'disabled',
      false
    ) // Enable the prev button
  }
})

$('.carousel__slide__container__footer .prev-button').on('click', () => {
  const currentSlide = $('#carousel .current-slide')
  const prevSlide = currentSlide.prev()
  if (prevSlide.length === 0) {
    // No prev slide, disable the prev button
    $('.carousel__slide__container__footer .prev-button').prop('disabled', true)
  } else {
    // Move to the prev slide
    moveToSlide(track, currentSlide, prevSlide)
    $('.carousel__slide__container__footer .next-button').prop(
      'disabled',
      false
    ) // Enable the nex button
  }
})
