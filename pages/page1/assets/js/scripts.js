const carousel = document.querySelector('.list');
const cells = carousel.querySelectorAll('.cell');
let selectedIndex = 0;

function rotateCarousel() {
    cells.forEach((cell, index) => {
        if (index === selectedIndex) {
            cell.style.transform = 'translateY(280px)';
        } else if (index === (selectedIndex + 1) % cells.length) {
            cell.style.transform = 'translateY(1040px)';
        } else if (index === (selectedIndex - 1 + cells.length) % cells.length) {
            cell.style.transform = 'translateY(-500px)';
        }
    });
}

function selectPrev() {
    selectedIndex = (selectedIndex - 1 + cells.length) % cells.length;
    rotateCarousel();
}

function selectNext() {
    selectedIndex = (selectedIndex + 1) % cells.length;
    rotateCarousel();
}

document.querySelector('.prev').addEventListener('click', selectPrev);
document.querySelector('.next').addEventListener('click', selectNext);

rotateCarousel();
