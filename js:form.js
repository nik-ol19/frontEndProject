document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const email = document.getElementById("email");
  const confirmEmail = document.getElementById("confirmEmail");

  form.addEventListener("submit", (e) => {
    if (email.value.trim() !== confirmEmail.value.trim()) {
      e.preventDefault();
      alert("Email addresses do not match. Please re-enter your email.");
      confirmEmail.focus();
    }
  });
});