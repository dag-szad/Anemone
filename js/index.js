import { toggleModal, getCurrentlyOpenModal } from './openModal.js';

const newsletterButton = document.querySelector('.newsletterButton');
newsletterButton.addEventListener('click', () => {
  toggleModal('newsletter');
});

const newsletterExitButton = document.querySelector('.newsletterExitButton');
newsletterExitButton.addEventListener('click', () => {
  toggleModal('newsletter');
});

const contactButtons = document.querySelectorAll('.contactButton');
contactButtons.forEach((contactButton) => {
  contactButton.addEventListener('click', () => {
    toggleModal('contact');
  });
});

const contactExitButton = document.querySelector('.contactExitButton');
contactExitButton.addEventListener('click', () => {
  toggleModal('contact');
});

document.addEventListener('keydown', (event) => {
  const currentModal = getCurrentlyOpenModal();

  if (event.key === 'Escape' && currentModal === 'newsletter') {
    toggleModal('newsletter');
  } else if (event.key === 'Escape' && currentModal === 'contact') {
    toggleModal('contact');
  }
});
