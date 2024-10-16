gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", () => {
  function transitionImages(section) {
    const steps = document.querySelectorAll(`${section} .step`)
    const images = document.querySelectorAll(`${section} img`)

    steps.forEach((step, index) => {
      let image = images[index + 1]

      ScrollTrigger.create({
        trigger: step,
        start: "top 90%",
        onEnter: () => {
          image.classList.add("make_visible")
        },
        onLeaveBack: () => {
          image.classList.remove("make_visible")
        },
      })
    })
  }

  transitionImages("#firstSection")

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.addEventListener("load", function () {
      ScrollTrigger.refresh()
    })
  })
})
