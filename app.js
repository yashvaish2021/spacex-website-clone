const hamBtn = window.document.querySelector("#menu-btn");
const overlay = window.document.querySelector(".overlay");
const menu = window.document.querySelector(".hamburger-menu");
const counters = window.document.querySelectorAll(".counter");
let scrollStarted = false;

hamBtn.addEventListener("click", toggle);
document.addEventListener("scroll", scrollPage);

function toggle() {
  hamBtn.classList.toggle("open");
  overlay.classList.toggle("ovelay-show");
  document.body.classList.toggle("stop-scroll");
  menu.classList.toggle("show-menu");
}

function scrollPage() {
  const scrollPosY = window.scrollY;
  if (scrollPosY > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPosY < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = parseInt(counter.getAttribute("data-target"));
      const c = +counter.innerText;
      console.log(c);
      const increment = target / 100;
      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

function reset() {
  counters.forEach(function (counter) {
    counter.innerText = 0;
  });
}
