(function () {
    const modal = document.getElementById("paperModal");
    const img = document.getElementById("paperModalImg");
    const title = document.getElementById("paperModalTitle");
    const venue = document.getElementById("paperModalVenue");
    const abs = document.getElementById("paperModalAbs");
    if (!modal) return;
  
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
  
      const closeBtn = modal.querySelector(".paper-modal__close");
      closeBtn && closeBtn.focus();
    }
  
    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
  
      // 等动画结束再清空，避免“闪一下”
      window.setTimeout(() => {
        img.src = "";
        title.textContent = "";
        venue.textContent = "";
        abs.textContent = "";
        if (lastFocus && lastFocus.focus) lastFocus.focus();
      }, 280);
    }
  
    document.addEventListener("click", (e) => {
      const t = e.target;
      if (t.classList && t.classList.contains("js-paper-modal")) openModal(t);
      if (t.dataset && t.dataset.close) closeModal();
    });
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  })();