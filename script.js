const ElevatedUI = (() => {
  const qs = (sel) => document.querySelector(sel);

  function initNav() {
    const btn = qs(".nav-toggle");
    const mobile = qs("#mobileNav");
    if (!btn || !mobile) return;

    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      mobile.hidden = isOpen;
    });

    mobile.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      btn.setAttribute("aria-expanded", "false");
      mobile.hidden = true;
    });
  }

  function initSubmittedMessage() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") !== "1") return;

    const contact = qs("#contact");
    if (!contact) return;

    const note = document.createElement("div");
    note.className = "card";
    note.style.marginBottom = "18px";
    note.innerHTML = `
      <h3 class="card__title">Thanks — we got your request.</h3>
      <p class="card__text">We’ll review your details and reach out shortly. If it’s urgent, call <a class="link" href="tel:+17742950454">774.295.0454</a>.</p>
    `;

    const container = contact.querySelector(".container");
    if (container) container.prepend(note);
  }

  function init() {
    initNav();
    initSubmittedMessage();
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", ElevatedUI.init);