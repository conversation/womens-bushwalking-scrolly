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

  function typeWriterEffect() {
    const typing = document.querySelectorAll(".typewriter")
    let opacityAmount = 30

    function type(element) {
      function randomOpacity() {
        return (
          (Math.floor(Math.random() * opacityAmount) + (100 - opacityAmount)) /
          100
        )
      }

      function randomEms() {
        if (Math.random() > 0.8) {
          return (Math.floor(Math.random() * 100) - 50) / 800
        } else {
          return 0
        }
      }

      function wrap(char) {
        return (
          '<span style="opacity:' +
          randomOpacity() +
          "; text-shadow:" +
          randomEms() +
          "em " +
          randomEms() +
          'em currentColor;">' +
          char +
          "</span>"
        )
      }

      const wrappedText = Array.from(element.textContent).map(wrap)

      element.innerHTML = wrappedText.join("")
    }

    typing.forEach(type)
  }

  typeWriterEffect()

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.addEventListener("load", function () {
      ScrollTrigger.refresh()
    })
  })
})
