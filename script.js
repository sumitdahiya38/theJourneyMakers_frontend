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
    const number = "919303055905";
    const encodedMessage = encodeURIComponent(message);
  
    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${number}&text=${encodedMessage}`;
    } else {
      window.open(`https://wa.me/${number}?text=${encodedMessage}`, "_blank");
    }
  }
  

  window.sendFormToSheet = async function () {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    const encodedData = new URLSearchParams(formData);
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbz87bkRZvJuWCCnIKKSEADqhTmalW3UW2OZl1h-Mjv4BlYZa8kYDAlG6Tv2Kck87TarEA/exec', {
        method: 'POST',
        body: encodedData
      });
  
      const text = await response.text();
      alert('Submitted successfully');
      console.log('Response:', text);
    } catch (err) {
      alert('Error submitting form');
      console.error(err);
    }
  };