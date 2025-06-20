
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Toggle dropdown
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Close dropdown when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

