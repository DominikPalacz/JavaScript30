document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.classList.add("section-");

  section.innerHTML = `<div class="section">
  <p>magic</p>
  That's the basic of getting up a key sequencing detection... magic
  <p>magic</p> magic
  </div>`;
  fragment.appendChild(section);
  document.body.appendChild(fragment);

  const pressed = [];
  const password = "magic";

  window.addEventListener("keyup", ({ key }) => {
    console.log("e :", key);
    pressed.push(key);
    pressed.splice(-password.length - 1, pressed.length - password.length);
    console.log(pressed);
    if (pressed.join("").includes(password)) cornify_add();
  });
});
