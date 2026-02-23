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
    //   document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
      document.documentElement.classList.add("modal-open");
  
      const closeBtn = modal.querySelector(".paper-modal__close");
      closeBtn && closeBtn.focus();
    }
  
    function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
      
        // 🔥 正确移除滚动锁
        document.body.classList.remove("modal-open");
        document.documentElement.classList.remove("modal-open");
      
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