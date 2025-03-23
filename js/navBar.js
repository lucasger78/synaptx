document.addEventListener("DOMContentLoaded", function () {
    let header = document.getElementById("header");
    let lastScrollTop = 0;
    let threshold = 10; // Cantidad de píxeles para que reaparezca al subir
  
    window.addEventListener("scroll", function () {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      let slide02 = document.querySelector('[data-menuanchor="slide02"]');
  
      if (!slide02) return; // Si no encuentra slide02, no hace nada
  
      let slide02Offset = slide02.getBoundingClientRect().top + window.scrollY;
  
      if (scrollTop >= slide02Offset) {
        // Si bajamos más allá de slide02
        if (scrollTop > lastScrollTop) {
          header.style.transform = "translateY(-100%)"; // Ocultar header
        } else if (lastScrollTop - scrollTop > threshold) {
          header.style.transform = "translateY(0)"; // Mostrar header al subir 10px
        }
      } else {
        header.style.transform = "translateY(0)"; // Siempre visible antes de slide02
      }
  
      lastScrollTop = scrollTop;
    });
  });
  