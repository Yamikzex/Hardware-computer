
// Cambiar tema
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("light-mode");
  localStorage.setItem("theme", isDark ? "light" : "dark");
}

function applyTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("light-mode");
  }
}

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.scroll-effect').forEach(el => observer.observe(el));

// Inicializar
applyTheme();

// Botones
document.getElementById("toggle-theme").addEventListener("click", toggleTheme);
