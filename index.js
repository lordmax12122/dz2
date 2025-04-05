const slider = document.querySelector(".slider__input")
const sliderImage = document.querySelector(".slider__image")

slider.addEventListener("input", _.debounce((event) => {
    sliderImage.style.width = slider.value + "px"
}, 10)
)

const box = document.querySelector("#box")

box.addEventListener("mousemove",  _.throttle((event) => {
    console.log(event)
    box.style.left = event.clientX + "px"
    box.style.top = event.clientY + "px"
})
)
