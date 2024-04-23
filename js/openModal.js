export function toggleModal(modalType) {
  const modalOverlay = document.querySelector(`.${modalType}Overlay`);
  const modalContent = document.querySelector(`.${modalType}Content`);

  modalOverlay.classList.toggle('is-hidden');
  modalContent.classList.toggle('is-hidden');

  if (!modalContent.classList.contains('is-hidden')) {
    modalContent.focus();
    modalOverlay.addEventListener('click', (event) => {
      if (event.target === modalOverlay) {
        toggleModal(modalType);
      }
    });
  } else {
    modalOverlay.removeEventListener('click', (event) => {
      if (event.target === modalOverlay) {
        toggleModal(modalType);
      }
    });
  }
}
