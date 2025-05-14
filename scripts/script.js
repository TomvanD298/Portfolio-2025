//////////////////////////////////////////////////////////////////////
///////////////// ANIMATION NAVBAR /////////////////
//////////////////////////////////////////////////////////////////////

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-60px";
//   }
//   prevScrollpos = currentScrollPos;
// }


//////////////////////////////////////////////////////////////////////
///////////////// ANIMATION FOR THE TITLE /////////////////
//////////////////////////////////////////////////////////////////////


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

//////////////////////////////////////////////////////////////////////
///////////////// ANIMATION FOR HEXAGONS AND CIRCLES /////////////////
//////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////
///////////////////////////// PORTFOLIO //////////////////////////////
//////////////////////////////////////////////////////////////////////


const grid = document.querySelector(".grid");
const buttons = document.querySelectorAll('[data-filter]');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-tech');
const modalImg = document.getElementById('modal-img');
const modalLive = document.getElementById('modal-live');
const modalGithub = document.getElementById('modal-github');
// Load JSON and render cards
fetch('./projects.json')
  .then(res => res.json())
  .then(projects => {
    // Create cards
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.category = project.category;
      card.dataset.title = project.title;
      card.dataset.description = project.description;
      card.dataset.tech = project.tech;
      card.dataset.img = project.image;
      card.dataset.link = project.link;
      card.dataset.github = project.github;

      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" />
        <div class="subtext">${project.subtext}</div>
      `;

      grid.appendChild(card);
    });

    // Now attach modal and filter logic
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.innerText = card.dataset.title;
    modalText.innerText = card.dataset.description;
    modalTech.innerText = card.dataset.tech;
    modalImg.src = card.dataset.img;
    modalLive.href = card.dataset.link;
    modalGithub.href = card.dataset.github;

    modal.classList.add('show');
    modal.classList.remove('hidden');
  });
});
    // Set default active filter
    document.querySelector('[data-filter="all"]').classList.add('active-filter');

    // Filtering
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active-filter'));
        button.classList.add('active-filter');

        const filter = button.getAttribute('data-filter');

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          card.dataset.shouldHide = !(filter === 'all' || category === filter);
        });

        const state = Flip.getState(cards);

        cards.forEach(card => {
          if (card.dataset.shouldHide === "true") {
            card.classList.add('hidden');
          } else {
            card.classList.remove('hidden');
          }
        });

        Flip.from(state, {
          duration: 0.5,
          ease: "power1.inOut",
          stagger: 0.05,
          absolute: true
        });
      });
    });

    // Modal open
    cards.forEach(card => {
      card.addEventListener('click', () => {
        modalTitle.innerText = card.dataset.title;
        modalText.innerText = card.dataset.description;
        modalTech.innerText = card.dataset.tech;
        modalImg.src = card.dataset.img;
        modalLive.href = card.dataset.link;
        modalGithub.href = card.dataset.github;

        modal.classList.add('show');
        modal.classList.remove('hidden');
      });
    });
  });

// Modal close
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => modal.classList.add('hidden'), 300);
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
  }
});