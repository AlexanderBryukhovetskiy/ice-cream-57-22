(() => {
  const refs = {
    openModalBtn: document.querySelector("[prod-modal-open-cream]"),
    closeModalBtn: document.querySelector("[prod-modal-close-cream]"),
    modal: document.querySelector("[prod-modal-cream]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("prod-cream");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[prod-modal-open-coffee]"),
    closeModalBtn: document.querySelector("[prod-modal-coffee]"),
    modal: document.querySelector("[prod-modal-coffee]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("prod-coffee");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[prod-modal-open-milkshakes]"),
    closeModalBtn: document.querySelector("[prod-modal-close-milkshakes]"),
    modal: document.querySelector("[prod-modal-milkshakes]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("prod-milkshakes");
  }
})();