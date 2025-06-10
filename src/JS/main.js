  document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll('.hero__indicators-dot');
    const slidesContainer = document.querySelector('.hero__slides');

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        // Atualiza transform do container
        slidesContainer.style.transform = `translateX(-${index * 34}%)`;

        // Atualiza classes ativas
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
    });

    // Opcional: definir slide inicial
    dots[0].classList.add('active');
    slidesContainer.style.transform = 'translateX(0%)';
  });

