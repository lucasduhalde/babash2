// ===== FUNCIONALIDADES PRINCIPALES =====

document.addEventListener("DOMContentLoaded", function () {
  // Revelado al hacer scroll.
  // El estado inicial vive en la clase .reveal del CSS, no aquí: así el
  // contenido nunca queda invisible si el JS falla o no llega a cargar.
  const revealables = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    revealables.forEach((el) => observer.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("is-visible"));
  }

  // Tracking de clicks en botones de contacto
  document.querySelectorAll(".contact-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const action = this.classList.contains("call-btn") ? "call" : "whatsapp";
      console.log(`Usuario hizo click en: ${action}`);
      // Aquí puedes agregar tracking de Google Analytics o similar
    });
  });
});
