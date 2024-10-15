gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  function transitionImages() {
    let section = "#firstSection"; // section selector (id or class)
    const steps = gsap.utils.toArray(`${section} .step`);
    const images = gsap.utils.toArray(`${section} img`);

    steps.forEach((step, index) => {
      let image = images[index + 1];

      ScrollTrigger.create({
        trigger: step,
        start: `top 90%`,
        onEnter: () => {
          image.classList.add("make_visible");
        },
        onLeaveBack: () => {
          image.classList.remove("make_visible");
        },
      });
    });
  }

  transitionImages();

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.addEventListener("load", function () {
      ScrollTrigger.refresh();
    });
  });
});
