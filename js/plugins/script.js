const projects = document.querySelectorAll(".project");
const preview = document.querySelector(".preview");
const image = document.querySelector("#preview-image");

projects.forEach(project => {

  project.addEventListener("mouseenter", () => {
    image.src = project.dataset.image;
    preview.classList.add("show");
  });

  project.addEventListener("mouseleave", () => {
    preview.classList.remove("show");
  });

  project.addEventListener("mousemove", (e) => {
    preview.style.left = e.clientX + 20 + "px";
    preview.style.top = e.clientY + 20 + "px";
  });

});