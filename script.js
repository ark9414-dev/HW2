const openRecoveryBtn = document.getElementById("openRecoveryBtn");
const backLoginBtn = document.getElementById("backLoginBtn");
const recoveryBox = document.getElementById("recoveryBox");
const cookieHelpBtn = document.getElementById("cookieHelpBtn");
const cookieModal = document.getElementById("cookieModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const closeModalFooterBtn = document.getElementById("closeModalFooterBtn");

if (openRecoveryBtn && backLoginBtn && recoveryBox) {
  openRecoveryBtn.addEventListener("click", () => {
    recoveryBox.classList.remove("hidden");
    recoveryBox.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  backLoginBtn.addEventListener("click", () => {
    recoveryBox.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = tab.dataset.tab;

    tabs.forEach((btn) => {
      const isActive = btn === tab;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isTarget = panel.dataset.panel === selected;
      panel.classList.toggle("hidden", !isTarget);
    });
  });
});

function closeModal() {
  cookieModal.classList.add("hidden");
}

if (cookieHelpBtn && cookieModal && closeModalBtn && closeModalFooterBtn) {
  cookieHelpBtn.addEventListener("click", () => {
    cookieModal.classList.remove("hidden");
  });

  closeModalBtn.addEventListener("click", closeModal);
  closeModalFooterBtn.addEventListener("click", closeModal);

  cookieModal.addEventListener("click", (event) => {
    if (event.target === cookieModal) {
      closeModal();
    }
  });
}
