function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

// Close the mobile menu ONLY on small screens after clicking a link
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.getElementById("navLinks");
  const links = navLinks.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768 && navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
      }
    });
  });
});
