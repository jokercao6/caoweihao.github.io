(function () {
    const modal = document.getElementById("paperModal");
    const img = document.getElementById("paperModalImg");
    const title = document.getElementById("paperModalTitle");
    const venue = document.getElementById("paperModalVenue");
    const abs = document.getElementById("paperModalAbs");
  
    if (!modal) return;
  
    function openModal(el) {
      img.src = el.dataset.full || el.src;
      title.textContent = el.dataset.title || "";
      venue.textContent = el.dataset.venue || "";
      abs.textContent = (el.dataset.abstract || "").replace(/\\n/g, "\n");
  
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  
    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      img.src = "";
      document.body.style.overflow = "";
    }
  
    document.addEventListener("click", (e) => {
      const t = e.target;
  
      if (t.classList && t.classList.contains("js-paper-modal")) {
        openModal(t);
        return;
      }
  
      if (t.dataset && t.dataset.close) {
        closeModal();
        return;
      }
    });
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
  })();