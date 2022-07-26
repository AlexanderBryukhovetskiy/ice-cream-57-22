(() => {
    const refs = {
      closeModalBtn: document.querySelector('[modal-close]'),
      modal: document.querySelector('[modal-close-data]'),
    };

    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle('modal-open');
      refs.modal.classList.toggle('is-hidden');
    }
  })();