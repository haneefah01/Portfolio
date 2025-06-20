function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

// Close menu when any nav link is clicked (mobile only)
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.getElementById('navLinks');
  const links = navLinks.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("show");
      }
    });
  });
});
