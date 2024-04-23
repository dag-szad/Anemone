import { toggleModal } from './openModal.js';
let currentModal = 'none';

const newsletterButton = document.querySelector('.newsletterButton');
newsletterButton.addEventListener('click', () => {
  toggleModal('newsletter');
  currentModal = 'newsletter';
});

const newsletterExitButton = document.querySelector('.newsletterExitButton');
newsletterExitButton.addEventListener('click', () => {
  toggleModal('newsletter');
  currentModal = 'none';
});

const contactButtons = document.querySelectorAll('.contactButton');
contactButtons.forEach((contactButton) => {
  contactButton.addEventListener('click', () => {
    toggleModal('contact');
    currentModal = 'contact';
  });
});

const contactExitButton = document.querySelector('.contactExitButton');
contactExitButton.addEventListener('click', () => {
  toggleModal('contact');
  currentModal = 'none';
});

const thanksButtons = document.querySelectorAll('.thanksButton');
thanksButtons.forEach((thanksButton) => {
  thanksButton.addEventListener('click', () => {
    if (currentModal === 'newsletter') {
      toggleModal('newsletter');
    } else if (currentModal === 'contact') {
      toggleModal('contact');
    }
    toggleModal('thanks');
    currentModal = 'thanks';
  });
});

const thanksExitButtons = document.querySelectorAll('.thanksExitButton');
thanksExitButtons.forEach((thanksExitButton) => {
  thanksExitButton.addEventListener('click', () => {
    toggleModal('thanks');
    currentModal = 'none';
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && currentModal === 'newsletter') {
    toggleModal('newsletter');
  } else if (event.key === 'Escape' && currentModal === 'contact') {
    toggleModal('contact');
  }
});
