
// We create a function which let all the 
// imgs to be loaded before the width is calculated - this prevents the 
// sizing to be off


window.onload = () => {

const carouselSlide = document.querySelector(".carousel__slide") 
const carouselImgs = document.querySelectorAll(".carousel__slide img") 

// Monitoring which img we are on with a counter
let counter = 1

// calculating the width of the images so we know how much we need to slide
// this makes the carousel work on different screen sizes
const size = carouselImgs[0].clientWidth

// starting on the first images and not the duplicated one
// so here we are calculating the size and multiplying it with 1 
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

// Buttons
const nextBtn = document.querySelector("#nextBtn") 
const prevBtn = document.querySelector("#preBtn") 


// Button listeners 
nextBtn.addEventListener('click', () => {
  // the if-statement prevents us to go outside the container when clicking forward
  if (counter >= carouselImgs.length -1) return 
  carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

prevBtn.addEventListener('click', () => {
  // the if-statement prevents us to go outside the container when clicking backwards
  if (counter <= 0) return
  carouselSlide.style.transition = "transform 0.4s ease-in-out"
  counter--
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

// Looping back to the original image
// we will not reload anything to accomplish this, we will jump the position

// we use _transitionend_ which is an event  listener that triggers after 
// the transition finishes if the img is one of the cloned ones, we are 
// going to reset the transition and jump back to the original img
// we use counter to keep track on which img we are on
carouselSlide.addEventListener('transitionend', () => {
  if (carouselImgs[counter].id === "lastClone") {
    carouselSlide.style.transition = "none"
    // by transform none we can translate it back to the original img
    // here we update the counter (remembering the cloned img)
    counter = carouselImgs.length - 2
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
  }
  if (carouselImgs[counter].id === "firstClone") {
    carouselSlide.style.transition = "none"
    counter = carouselImgs.length - counter
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
  }

})
}