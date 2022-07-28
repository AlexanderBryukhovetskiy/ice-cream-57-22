(() => {
    const refs = {
      openModalBtn: document.querySelector(".activity-button"),
      closeModalBtn: document.querySelector(".about-modal-close-btn"),
      modal: document.querySelector("[prod-modal-cream]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("prod-cream");
    }
  })();
  