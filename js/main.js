// ===== FUNCIONALIDADES PRINCIPALES =====

// Smooth scroll para el botón CTA
document.addEventListener("DOMContentLoaded", function () {
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", function (e) {
      e.preventDefault();
      const contactoSection = document.querySelector("#contacto");
      if (contactoSection) {
        contactoSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }

  // Animaciones al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observar elementos para animación
  const animatedElements = document.querySelectorAll(
    ".service-card, .audience-card, .profile-card, .contact-card"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Tracking de clicks en botones de contacto
  const contactButtons = document.querySelectorAll(".contact-btn");
  contactButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const action = this.classList.contains("call-btn") ? "call" : "whatsapp";
      console.log(`Usuario hizo click en: ${action}`);
      // Aquí puedes agregar tracking de Google Analytics o similar
    });
  });
});

// ===== FUNCIONES UTILITARIAS =====

// Función para validar formularios (si se agregan en el futuro)
function validateForm(formData) {
  const errors = [];

  if (!formData.get("name") || formData.get("name").trim() === "") {
    errors.push("El nombre es requerido");
  }

  if (!formData.get("email") || !isValidEmail(formData.get("email"))) {
    errors.push("El email no es válido");
  }

  return errors;
}

// Función para validar email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para mostrar notificaciones
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Estilos básicos para la notificación
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    z-index: 1000;
    animation: slideInRight 0.3s ease;
  `;

  // Colores según el tipo
  switch (type) {
    case "success":
      notification.style.backgroundColor = "#10b981";
      break;
    case "error":
      notification.style.backgroundColor = "#ef4444";
      break;
    case "warning":
      notification.style.backgroundColor = "#f59e0b";
      break;
    default:
      notification.style.backgroundColor = "#3b82f6";
  }

  document.body.appendChild(notification);

  // Remover después de 3 segundos
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Función para manejar el scroll suave
function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Función para agregar efectos de hover dinámicos
function addHoverEffects() {
  const cards = document.querySelectorAll(
    ".service-card, .audience-card, .profile-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Inicializar efectos de hover cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  addHoverEffects();
});
