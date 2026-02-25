// Elevated Asset Management - minimal JS
const ElevatedLead = {
  handleSubmit(e, noteId) {
    e.preventDefault();
    const note = document.getElementById(noteId);
    if (note) note.textContent = "Submitted. Next step: connect this form to Formspree / a CRM / your email.";
    return false;
  }
};

(function(){
  const toggle = document.querySelector(".nav-toggle");
  const mobile = document.getElementById("mobileNav");
  if (!toggle || !mobile) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    mobile.hidden = isOpen;
  });

  // Close menu when clicking a link
  mobile.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "A") {
      toggle.setAttribute("aria-expanded", "false");
      mobile.hidden = true;
    }
  });
})();
