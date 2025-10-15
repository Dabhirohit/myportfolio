// ===== Typing Effect =====
var typed = new Typed(".typing", {
  strings: ["Flutter Developer", "Mobile App Developer", "UI Designer"],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 1000,
  loop: true
});

// ===== Active Navbar on Scroll =====
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};

// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
menuToggle.addEventListener("click", () => navbar.classList.toggle("active"));

// ===== Contact Form & Resume Modal =====
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const clearBtn = document.getElementById('clearBtn');

  // Contact Form Submit
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const email = encodeURIComponent(document.getElementById('email').value.trim());
    const subject = encodeURIComponent(document.getElementById('subject').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    const body = `Hello Rohit,%0D%0A%0D%0AMy name is ${name} (${email}).%0D%0A%0D%0A${message}%0D%0A%0D%0ARegards,%0D%0A${name}`;
    const mailto = `mailto:dabhirohitshaileshbhai@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  });

  // Clear form
  clearBtn.addEventListener('click', () => {
    contactForm.reset();
  });

// ===== Resume Modal =====
const viewResumeBtn = document.getElementById("viewResumeBtn");
const resumeModal = document.getElementById("resumeModal");
const closeResume = document.getElementById("closeResume");
const frame = document.getElementById("resumeFrame");

viewResumeBtn.addEventListener("click", () => {
  frame.src = "resume.pdf";   // Correct path to your PDF
  resumeModal.classList.add("active");
});

closeResume.addEventListener("click", () => {
  resumeModal.classList.remove("active");
  frame.src = "";
});

resumeModal.addEventListener("click", (e) => {
  if (e.target === resumeModal) {
    resumeModal.classList.remove("active");
    frame.src = "";
  }
});
});
