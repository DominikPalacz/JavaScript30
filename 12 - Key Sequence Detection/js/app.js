document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.classList.add("section-12");

  section.innerHTML = `<div class="section">

  <p>magic</p>
  That's the basic of getting up a key sequencing detection... magic
  <p>magic</p> magic
  <h1>If you still don't know what to do</h1>
  <h2>Select this text with the mouse and => <strong>Write the word... magic</strong></h2>
  </div>`;
  fragment.appendChild(section);
 document.querySelector(".scroll-container").appendChild(fragment);

  const pressed = [];
  const password = "magic";

  window.addEventListener("keyup", ({ key }) => {
    pressed.push(key);
    pressed.splice(-password.length - 1, pressed.length - password.length);
    
    if (pressed.join("").includes(password)) cornify_add();
  });
});
