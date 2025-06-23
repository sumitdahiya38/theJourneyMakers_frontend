document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".secondSectionCard");
  const secondSection = document.querySelector(".secondSection");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Activate the 3rd card when section is in view
        if (cards[2]) cards[2].classList.add("active");
      } else {
        // Remove active class when section goes out of view
        cards.forEach(card => card.classList.remove("active"));
      }
    });
  }, {
    threshold: 0.7 // Trigger when 40% of section is visible
  });

  if (secondSection) observer.observe(secondSection);

  // Hover behavior remains unchanged
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("active");
      const anyActive = Array.from(cards).some((c) =>
        c.classList.contains("active")
      );
      if (!anyActive  && cards.length > 0) {
        cards[2].classList.add("active");
      }
    });
  });
});




// document.addEventListener("DOMContentLoaded", () => {
//   const cards = document.querySelectorAll(".secondSectionCard");
//   if (cards.length > 0) {
//     cards[2].classList.add("active");
//   }

//   cards.forEach((card) => {
//     card.addEventListener("mouseenter", () => {
//       cards.forEach((c) => c.classList.remove("active"));
//       card.classList.add("active");
//     });

//     card.addEventListener("mouseleave", () => {
//       card.classList.remove("active");
//       const anyActive = Array.from(cards).some((c) =>
//         c.classList.contains("active")
//       );
//       if (!anyActive && cards.length > 0) {
//         cards[2].classList.add("active");
//       }
//     });
//   });
// });