document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.classList.add("section-16");

  section.innerHTML = `
  <div class="hero">
    <h1 contenteditable>🔥WOAH!</h1>
  </div>`;
  fragment.appendChild(section);
 document.querySelector(".scroll-container").appendChild(fragment);

  const hero = document.querySelector(".hero");
  const text = hero.querySelector("h1");
  let walk;

  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    walk = 150;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);
    let colorR = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(${colorR},0,0,1),
      ${xWalk * 2}px ${yWalk * -2}px 0 rgba(0,${colorG},0,1),
      ${yWalk * -3}px ${xWalk * 3}px 0 rgba(0,0,${colorB},1),
      ${yWalk * 4}px ${xWalk * -4}px 0 rgba(${colorR},0,${colorB},1)
    `;
  }

  hero.addEventListener("mousemove", shadow);
});
