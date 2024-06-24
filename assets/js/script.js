document.querySelector(".core-memory").addEventListener("click", function(){
    document.querySelector(".orb").style.display = "none";
});

const carousel = document.getElementsByClassName(".container");
const slide = document.getElementsByClassName(".slide");
const btn = document.getElementsByClassName(".arrow");

btn.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
    carousel.scrollLeft += slideWidth;
})