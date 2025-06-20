
  const extraCourses = {
    math: [
      '📘 Discrete Mathematics',
      '📐 Calculus I & II',
      '📊 Advanced Linear Algebra',
      '📏 Real Analysis'
    ],
    stats: [
      '📈 Regression Modeling',
      '📊 Time Series Analysis',
      '📉 Multivariate Stats',
      '🧠 Machine Learning Basics'
    ],
    cs: [
      '💻 Data Structures',
      '🖥️ Algorithms in Python',
      '🧪 Software Testing',
      '🧬 Data Science Capstone'
    ]
  };

  function addCourses(element, category) {
    const ul = document.getElementById(`${category}-courses`);
    extraCourses[category].forEach(course => {
      const li = document.createElement('li');
      li.textContent = course;
      ul.appendChild(li);
    });
    element.remove(); // Remove the "Show More" paragraph
  }

 const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Auto close menu after clicking any link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
