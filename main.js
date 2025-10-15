// ===== Typed.js Effect =====
new Typed(".typing", {
  strings: ["Flutter Developer", "Mobile App Developer", "UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// ===== Menu Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
menuToggle.onclick = () => navbar.classList.toggle("active");

// ===== Contact Form Submit =====
const form = document.getElementById("contactForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Something went wrong. Please try again later.");
    }
  } catch (error) {
    alert("⚠️ Network error. Please check your connection.");
  }
});

// ===== Clear Button =====
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
  form.reset();
});

// ===== Resume Modal =====
const modal = document.getElementById("resumeModal");
const viewBtn = document.getElementById("viewResumeBtn");
const closeBtn = document.getElementById("closeResume");
const resumeFrame = document.getElementById("resumeFrame");

viewBtn.onclick = () => {
  resumeFrame.src = "resume.pdf";
  modal.style.display = "flex"; // use flex for centering
};

// close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
  resumeFrame.src = "";
};

// close on outside click
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    resumeFrame.src = "";
  }
};

