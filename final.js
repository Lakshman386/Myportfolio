// Education
  const eduObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.education-card').forEach(card => {
    eduObserver.observe(card);
  });


// Smooth scrolling for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      e.preventDefault(); // prevent form submission
    }
  });


  window.addEventListener("scroll", function() {
    const header = document.querySelector('.header');
    const aboutSection = document.querySelector('#about'); // Ensure your About section has an ID

    // Check if the About section is in view
    const aboutPosition = aboutSection.getBoundingClientRect().top;

    if (aboutPosition <= 0) {
      header.classList.add('scrolled'); // Add class when scrolling past the About section
    } else {
      header.classList.remove('scrolled'); // Remove class when at the top
    }
  });


// skills

document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector("#skills");
  const skillFills = document.querySelectorAll(".skill-fill");

  // Animate skill bars
  const animateSkills = () => {
    skillFills.forEach(bar => {
      const level = getComputedStyle(bar).getPropertyValue('--skill-level');
      bar.style.width = level;
      bar.setAttribute("data-animated", "true");
    });
  };

  // Reset animation
  const resetSkills = () => {
    skillFills.forEach(bar => {
      bar.style.width = "0";
      bar.removeAttribute("data-animated");
    });
  };

  // Observe section entering viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.getAttribute("data-animated")) {
        animateSkills();
        observer.unobserve(entry.target); // animate only once per load
      }
    });
  }, { threshold: 0.5 });

  observer.observe(skillsSection);

  // Listen for navbar click to skills
  document.querySelectorAll('a[href="#skills"]').forEach(link => {
    link.addEventListener("click", () => {
      resetSkills();
      setTimeout(() => animateSkills(), 500); // wait till scroll completes
    });
  });
});
