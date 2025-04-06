// document.addEventListener("DOMContentLoaded", function() {
//     let index = 0;
//     const images = document.querySelectorAll(".imagenes img");
//     const total = images.length;
    
//     document.querySelector(".next").addEventListener("click", function() {
//         index = (index + 1) % total;
//         updateCarousel();
//     });
    
//     document.querySelector(".prev").addEventListener("click", function() {
//         index = (index - 1 + total) % total;
//         updateCarousel();
//     });
    
//     function updateCarousel() {
//         images.forEach((img, i) => {
//             img.style.display = i === index ? "block" : "none";
//         });
//     }
//     updateCarousel();
// });


document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const dotsContainer = document.querySelector(".carousel-dots");
    const images = document.querySelectorAll(".carousel-track img");
    let index = 0;

    // Crear los indicadores (puntos)
    images.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateDots() {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function moveToSlide(newIndex) {
        index = newIndex;
        track.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    prevButton.addEventListener("click", () => {
        index = index > 0 ? index - 1 : images.length - 1;
        moveToSlide(index);
    });

    nextButton.addEventListener("click", () => {
        index = index < images.length - 1 ? index + 1 : 0;
        moveToSlide(index);
    });
});
