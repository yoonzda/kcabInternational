var swiper = new Swiper(".mainSlideContainer", {
    loop: true,
    grabCursor: true,
    speed: 800,
    // pagination: {
    //     el: ".swiper-pagination",
    //     type: "fraction",
    // },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + '/' +
                    '<span class="' + totalClass + '"></span>';
        },
        formatFractionCurrent: function (number) {
            return number < 10 ? '0' + number : number;
        },
        formatFractionTotal: function (number) {
            return number < 10 ? '0' + number : number;
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "creative",
    creativeEffect: {
        prev: {
        shadow: false,
        translate: ["-20%", 0, -1],
        },
        next: {
        translate: ["100%", 0, 0],
        },
    },
    // on: {
    //     slideChangeTransitionStart: function () {
    //     const activeSlide = this.slides[this.activeIndex];
    //     const wave = activeSlide.querySelector(".wave");
    //     if (wave) animateWaveText(wave);
    //     },
    // },
    on: {
        slideChangeTransitionStart: function () {
        const activeSlide = this.slides[this.activeIndex];
        const waves = activeSlide.querySelectorAll(".wave");

        waves.forEach(wave => animateWaveText(wave));
        },
    },
});

// const wave = document.querySelector(".wave");

// wave.innerHTML = wave.textContent
//   .split("")
//   .map((letter, idx) => {
//     if (letter === " ") return " ";
//     return `<h2 style="animation-delay:${
//       idx * 15
//     }ms" class="letter">${letter}</h2>`;
//   })
//   .join("");

function animateWaveText(waveEl) {
  const text = waveEl.getAttribute("data-text");

  waveEl.innerHTML = text
    .split("")
    .map((letter, idx) => {
      if (letter === " ") return " ";
      return `<p class="letter fonwR68" style="animation-delay:${idx * 15}ms">${letter}</p>`;
    })
    .join("");
}

// function animateWaveText(waveEl) {
//   const text = waveEl.getAttribute("data-text");

//   waveEl.innerHTML = text
//     .split(" ")
//     .map((word, idx) => {
//       if (word === "") return " ";
//       return `<p class="word fonwR68" style="display: inline-block; animation-delay:${idx * 150}ms">${word}</p>`;
//     })
//     .join(" ");
// }

// function animateWaveText(waveEl) {
//   const text = waveEl.dataset.text;
//   waveEl.innerHTML = "";

//   const words = text.split(" ");

//   words.forEach((word, idx) => {
//     const span = document.createElement("span");
//     span.className = "word";
//     span.style.animationDelay = `${idx * 120}ms`;
//     span.textContent = word;

//     waveEl.appendChild(span);

//     // 단어 사이 공백
//     if (idx < words.length - 1) {
//       waveEl.appendChild(document.createTextNode(" "));
//     }
//   });
// }