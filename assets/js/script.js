const carousel = document.querySelector('.wrapper');
const orbs = document.querySelectorAll('.orbs');
const text_item = document.querySelectorAll('.text-item');
const images = document.querySelectorAll('.orbs img');
orbs.forEach((slide, i) => {
    slide.onclick = () => {
        const angle = 360 / orbs.length * i;
        carousel.style.transform = `rotateZ(-${angle}deg)`;

        images.forEach((img, i)=>{
            text_item[i].classList.remove('active');
        })
        text_item[i].classList.add('active');
    }
});
