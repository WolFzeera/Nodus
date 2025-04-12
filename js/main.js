// Typewriter Effect
const words = [
    "Analisando dados...",
    "Encontrando rastros...",
    "Rastreamento em andamento..."
  ];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById("typewriter");
  
  function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, letterIndex);
    typingElement.textContent = currentText;
  
    if (!isDeleting && letterIndex < currentWord.length) {
      letterIndex++;
    } else if (isDeleting && letterIndex > 0) {
      letterIndex--;
    }
  
    if (letterIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1200); // pausa antes de apagar
      return;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  
    setTimeout(type, isDeleting ? 50 : 120);
  }
  
  document.addEventListener("DOMContentLoaded", type);
  
  // Scroll Reveal Effect
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll("section").forEach(section => {
    section.classList.add("reveal");
    revealObserver.observe(section);
  });
  