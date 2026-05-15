if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.onload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function () {
  /* ================== NAVBAR ================== */

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  // HAMBURGER MENU

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  const navItems = document.querySelectorAll(".nav-links a");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  /* ================== TYPING EFFECT ================== */

  const text = "Full Stack Developer, AI Enthusiast, Problem Solver";

  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      document.getElementById("typing-text").textContent += text.charAt(index);

      index++;

      setTimeout(typeEffect, 80);
    }
  }

  typeEffect();

  /* ================== EDUCATION CARD SWITCH ================== */

  const cards = document.querySelectorAll(".edu-card");
  const dots = document.querySelectorAll(".dot");

  let current = 0;

  cards.forEach((card) => card.classList.remove("active"));

  if (cards.length > 0) {
    cards[0].classList.add("active");
  }

  if (dots.length > 0) {
    dots[0].classList.add("active");
  }

  function showCard(i) {
    cards[current].classList.remove("active");

    if (dots[current]) {
      dots[current].classList.remove("active");
    }

    setTimeout(() => {
      current = i;

      cards[current].classList.add("active");

      if (dots[current]) {
        dots[current].classList.add("active");
      }
    }, 200);
  }

  function autoSwitch() {
    let next = (current + 1) % cards.length;

    showCard(next);
  }

  let interval = setInterval(autoSwitch, 4000);

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let i = parseInt(dot.getAttribute("data-index"));

      showCard(i);

      clearInterval(interval);

      interval = setInterval(autoSwitch, 4000);
    });
  });

  /* ================== CERTIFICATION SLIDER ================== */

  const wrapper = document.querySelector(".cert-wrapper");

  // DESKTOP = AUTO SCROLL
  // MOBILE = MANUAL ONLY

  if (wrapper && window.innerWidth > 768) {
    let direction = 1;
    let speed = 0.5;

    let isPaused = false;

    function animate() {
      if (!isPaused) {
        let maxScroll = wrapper.scrollWidth - wrapper.clientWidth;

        wrapper.scrollLeft += direction * speed;

        // RIGHT END

        if (wrapper.scrollLeft >= maxScroll) {
          wrapper.scrollLeft = maxScroll;

          direction = -1;
        }

        // LEFT END

        if (wrapper.scrollLeft <= 0) {
          wrapper.scrollLeft = 0;

          direction = 1;
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    // PAUSE ON HOVER

    wrapper.addEventListener("mouseenter", () => {
      isPaused = true;
    });

    wrapper.addEventListener("mouseleave", () => {
      isPaused = false;
    });
  }

  /* ================== NAVBAR HIDE ON SCROLL ================== */

  if (window.innerWidth > 768) {
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      // SCROLL DOWN
      if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.top = "-100px";
      }

      // SCROLL UP
      else {
        navbar.style.top = "0";
      }

      lastScroll = currentScroll;
    });
  }

  /* ================== CONTACT FORM ================== */

emailjs.init("Fv1AnvVRjIQkDXdrz");

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_480uk5f", "template_zywn91h", this)

      .then(function () {
        alert("Message Sent Successfully!");

        form.reset();
      })

      .catch(function (error) {
        alert("Failed To Send Message");

        console.log(error);
      });
  });
}
});


