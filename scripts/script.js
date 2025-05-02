document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(SplitText);
gsap.set("h1", { opacity: 1 });

let split = SplitText.create("#heading", { type: "chars" });
//now animate each character into place from 20px below, fading in:
gsap.from(split.chars, {
  y: 20,
  autoAlpha: 0,
  stagger: 0.05
});


/////// ANIMATION FOR HEXAGONS AND CIRCLES ///////

gsap.to(".hexagon1", {
  y: 15,
  rotation: 100,
  duration: 12,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".hexagon2", {
  x: 10,
  rotation: -100,
  duration: 14,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".hexagon3", {
  rotation: 360,
  duration: 60,
  repeat: -1,
  yoyo: true,
  ease: "none"
});

gsap.to(".hexagon4", {
  x: 30,
  rotation: -20,
  duration: 7,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".circle1", {
  y: 20,
  x: 10,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to("#imageCircle", {
  y: -20,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to("#imageSmallCircle", {
  y: -40,
  x: 20,
  duration: 20,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

} );