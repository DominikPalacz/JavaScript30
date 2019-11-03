document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ok :");

  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.innerHTML = `<div class="section"></div>`;
  fragment.appendChild(section);
  document.body.appendChild(fragment);
});
