document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const firstSection = document.querySelector(".firstSection");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (cards[0]) cards[0].classList.add("active");
      } else {
        cards.forEach(card => card.classList.remove("active"));
      }
    });
  }, {
    threshold: 0.5 // adjust based on when you want activation to happen
  });

  if (firstSection) observer.observe(firstSection);

  // Maintain hover behavior
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
      if (!anyActive && firstSection.getBoundingClientRect().top < window.innerHeight) {
        if (cards[0]) cards[0].classList.add("active");
      }
    });
  });
});
  
  // ====== WhatsApp Redirect ======
  function openWhatsApp(packageType) {
    let message = "Hi! I want to know more about the tours!";
    switch(packageType) {
      case 'ooty' :
        message = 'Hi! I want to know more about Ooty tour';
        break;
      case 'sikkim':
        message = 'Hi! I want to know more about Sikkim tour';
        break;
      case 'kerala':
        message = 'Hi! I want to know more about Kerala tour';
        break;
      case 'andaman':
        message = 'Hi! I want to know more about Andaman tour';
    }
    const isMobile = /iPhone|Android/i.test(navigator.userAgent);
    const number = "919675711458";
    const encodedMessage = encodeURIComponent(message);
  
    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${number}&text=${encodedMessage}`;
    } else {
      window.open(`https://wa.me/${number}?text=${encodedMessage}`, "_blank");
    }
  }
  