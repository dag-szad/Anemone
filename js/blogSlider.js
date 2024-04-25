const sliderContainer = document.querySelector('.blog__slider');
const sliderGallery = document.querySelector('.blog__posts');

const prevButton = document.querySelector('.blog__arrow-previous');
const nextButton = document.querySelector('.blog__arrow-next');

let pressed = false;
let startX;
let x;

const handleMouseDown = (e) => {
  pressed = true;
  startX = e.offsetX - sliderGallery.offsetLeft;
  sliderContainer.style.cursor = 'grabbing';
};

const handleMouseUp = () => {
  sliderContainer.style.cursor = 'grab';
  pressed = false;
};

const handleMouseMove = (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;
  sliderGallery.style.left = `${x - startX}px`;
  sliderGallery.style.transition = 'none';
  boundItems();
};

const boundItems = () => {
  let outer = sliderContainer.getBoundingClientRect();
  let inner = sliderGallery.getBoundingClientRect();

  if (parseInt(sliderGallery.style.left) > 0) {
    sliderGallery.style.left = '0px';
  }

  if (inner.right < outer.right) {
    sliderGallery.style.left = `-${inner.width - outer.width}px`;
  }
};

const calculateStep = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 288 && screenWidth < 720) {
    return 152;
  } else if (screenWidth > 720 && screenWidth < 1232) {
    return 376;
  } else {
    return 421;
  }
};

const handleArrowClick = (step) => {
  sliderGallery.style.transition = 'left 0.3s ease-in-out';
  sliderGallery.style.left = `${
    parseInt(window.getComputedStyle(sliderGallery).getPropertyValue('left')) +
    step
  }px`;
  setTimeout(() => {
    boundItems();
  }, 300);
};

export function initializeSlider() {
  sliderContainer.addEventListener('mousedown', handleMouseDown);
  sliderContainer.addEventListener('mousemove', handleMouseMove);
  sliderContainer.addEventListener('mouseup', handleMouseUp);

  prevButton.addEventListener('click', () => {
    handleArrowClick(calculateStep());
  });

  nextButton.addEventListener('click', () => {
    handleArrowClick(-calculateStep());
  });
}
