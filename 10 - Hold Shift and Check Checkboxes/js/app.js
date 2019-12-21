document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.classList.add("section-10");

  section.innerHTML = `<div class="inbox">
  <div class="item">
    <input type="checkbox">
    <p>When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes in-between those two checkboxes should be checked.</p>
  </div>
  <div class="item">
    <input type="checkbox">
    <p>This is an inbox layout.</p>
  </div>
  <div class="item">
    <input type="checkbox">
    <p>Check one item</p>
  </div>
  <div class="item">
    <input type="checkbox">
    <p>Hold down your Shift key</p>
  </div>
  <div class="item">
    <input type="checkbox">
    <p>Check a lower item</p>
  </div>
  <div class="item">
    <input type="checkbox">
    <p>Everything in between should also be set to checked</p>
  </div>
  <div class="item">
    <input type="checkbox">
    <p>Try do it without any libraries</p>
  </div>
  <div class="item">
    <input type="checkbox">
    <p>Just regular JavaScript</p>
  </div>
  <div class="item">
    <input type="checkbox">
    <p>Good Luck!</p>
  </div>
  <div class="item">
    <input type="checkbox">
    <p>Don't forget to tweet your result!</p>
  </div>
</div>`;
  fragment.appendChild(section);
 document.querySelector(".scroll-container").appendChild(fragment);

  const allCheckBoxes = document.querySelectorAll(
    '.inbox input[type="checkbox"]'
  );

  let lastCheck;

  function handleClick(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
      allCheckBoxes.forEach(box => {
        if (box === this || box === lastCheck) inBetween = !inBetween;
        if (inBetween) box.checked = true;
      });
    }
    lastCheck = this;
  }

  allCheckBoxes.forEach(box => box.addEventListener("click", handleClick));
});
