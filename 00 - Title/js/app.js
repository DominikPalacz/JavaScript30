document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.classList.add("section-");

  section.innerHTML = `<div class="section"></div>`;
  fragment.appendChild(section);
  document.body.appendChild(fragment);
});
