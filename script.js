// Actualizar el año actual en el footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Funcionalidad de las tabs
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover clase active de todos los botones
      tabButtons.forEach((btn) => btn.classList.remove("active"))

      // Añadir clase active al botón clickeado
      this.classList.add("active")

      // Obtener el target
      const target = this.getAttribute("data-target")

      // Ocultar todos los paneles
      tabPanes.forEach((pane) => pane.classList.remove("active"))

      // Mostrar el panel correspondiente
      document.getElementById(target).classList.add("active")
    })
  })
})

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajuste para el header fijo
        behavior: "smooth",
      })
    }
  })
})

// Animación de scroll para mostrar elementos
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (sectionTop < windowHeight * 0.75) {
      section.classList.add("visible")
    }
  })
})
