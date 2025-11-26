document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("lightbox");
  const modalImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.dataset.full;
      modal.style.display = "flex";
    });
  });
});