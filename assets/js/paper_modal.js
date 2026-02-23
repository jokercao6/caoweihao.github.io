(function () {
    const modal = document.getElementById("paperModal");
    const img = document.getElementById("paperModalImg");
    const title = document.getElementById("paperModalTitle");
    const venue = document.getElementById("paperModalVenue");
    const abs = document.getElementById("paperModalAbs");
  
    if (!modal) return;
  
    let isOpen = false;
    let lastFocus = null;
  
    function openModal(el) {
      lastFocus = document.activeElement;
  
      img.src = el.dataset.full || el.src;
      title.textContent = el.dataset.title || "";
      venue.textContent = el.dataset.venue || "";
      abs.textContent = (el.dataset.abstract || "").replace(/\\n/g, "\n");
  
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      isOpen = true;
  
      // Focus close button for accessibility
      const closeBtn = modal.querySelector("[data-close]");
      closeBtn && closeBtn.focus();
    }
  
    function closeModal() {
      if (!isOpen) return;
  
      // start animation out
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      isOpen = false;
  
      // wait for transition end then clear content
      window.setTimeout(() => {
        img.src = "";
        title.textContent = "";
        venue.textContent = "";
        abs.textContent = "";
        if (lastFocus && lastFocus.focus) lastFocus.focus();
      }, 240); // match CSS transition duration
    }
  
    document.addEventListener("click", (e) => {
      const t = e.target;
  
      // open
      if (t.classList && t.classList.contains("js-paper-modal")) {
        openModal(t);
        return;
      }
  
      // close when clicking backdrop or close button
      if (t.dataset && t.dataset.close) {
        closeModal();
        return;
      }
    });
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  })();