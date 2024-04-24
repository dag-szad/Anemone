const sliderContainer = document.querySelector('.blog__slider');
const sliderGallery = document.querySelector('.blog__posts');

let pressed = false;
let startX;
let x;

const handleMouseDown = (e) => {
    pressed = true;
    startX = e.offsetX - sliderGallery.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
};

const handleMouseEnter = () => {
    sliderContainer.style.cursor = "grab";
};

const handleMouseUp = () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
};

const handleMouseMove = (e) => {
    if (!pressed) return;
    e.preventDefault();
    
    x = e.offsetX;
    sliderGallery.style.left = `${x - startX}px`;
    boundItems();
};

const boundItems = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = sliderGallery.getBoundingClientRect();
    
    if (parseInt(sliderGallery.style.left) > 0) {
        sliderGallery.style.left = "0px";
    }
    
    if (inner.right < outer.right) {
        sliderGallery.style.left = `-${inner.width - outer.width}px`;
    }
};

const slideLeft = () => {
    const currentPosition = parseInt(sliderGallery.style.left) || 0;
    const newPosition = currentPosition + 200;

    console.log("Current position:", currentPosition);
    console.log("New position:", newPosition);
  
    sliderGallery.style.left = `${newPosition}px`;
    boundItems();
  };
  
  const slideRight = () => {
    const currentPosition = parseInt(sliderGallery.style.left) || 0;
    const newPosition = currentPosition - 200;
  
    sliderGallery.style.left = `${newPosition}px`;
    boundItems();
  };

export function initializeSlider() {
    sliderContainer.addEventListener("mousedown", handleMouseDown);
    sliderContainer.addEventListener("mouseenter", handleMouseEnter);
    sliderContainer.addEventListener("mouseup", handleMouseUp);
    sliderContainer.addEventListener("mousemove", handleMouseMove);
    
    const prevButton = document.querySelector('.blog__arrow-previous');
    const nextButton = document.querySelector('.blog__arrow-next');
    
    prevButton.addEventListener('click', slideLeft);
    nextButton.addEventListener('click', slideRight);
};