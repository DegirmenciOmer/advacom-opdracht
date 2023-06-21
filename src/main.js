/**
 * The header uses an image slider with two images right now
 * (can be found in “images”, “home_slide_01.png” and “home_slide_02.png” ).
 * There shoud be a transition between these two images
 * by clicking on the forward or backward button
 * (you can use any button you want right here for use in the navigation).
 * The text over the slider image should also be able to change while transitioning to a different slide
 * The semi-transparant circle can be found in the images folder be integrated into the slider.
 * The yellow crescent moon shape van also be found in the images folder should also be integrated into the slider.
 * The menu-items should trigger a dropdown menu on hover
 * Only 1 dropdown needs to be worked out for this assessment.
 * By clicking on the search icon a searchbox shoud appear to enter a searchword (see directory “example”, “searchbox_example.png”).
 */

const slideContent = [
  {
    id: 1,
    title: 'HAAL \n ALLES UIT \n JE TALENT',
    secondaryTitle: 'Wie is Coöperatie Limburg ',
    description:
      'Coöperatie Limburg Sport is een initiatief van Watersley Sports & Talentpark en zet zich in voor de sportieve ontwikkeling van Limburgse topsporters en talenten.',
    linkText: 'Meer over Limburg Sport',
    linkHref: 'https://www.limburgsport.nl/',
    image: '../images/home_slide_01.png',
  },
  {
    id: 2,
    title: 'Kwaliteit infrastructuur topsport',
    description:
      'Allereerst streven we ernaar om het aanbod en de kwaliteit van de infrastructuur voor topsport en talentontwikkeling in Limburg te beheren en te verbeteren. Hierdoor kunnen talenten en topsporters optimaal presteren en zich blijven ontwikkelen.',
    linkText: 'Ontdek nu!',
    linkHref: 'https://www.limburgsport.nl/',
    image: '../images/home_slide_02.png',
  },
]

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
const track = $('#carousel__track')
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
  const currentSlide = $('#carousel__track .current-slide')
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
  const currentSlide = $('#carousel__track .current-slide')
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
