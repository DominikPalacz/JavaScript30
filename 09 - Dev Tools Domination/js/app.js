document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");

  section.classList.add("section-");
  section.innerHTML = `<p>click me 👁‍🗨 ×BREAK×DOWN×</p>`;

  fragment.appendChild(section);
  document.body.appendChild(fragment);

  const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

  function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
  }

  const p = document.querySelector("p");
  p.addEventListener("click", makeGreen);

  // ! Interpolated
  console.log("Hi, I %s JavaScript!", "❤"); // old
  // ! Styled
  console.log("%c I Styled with %c", " font-size:75px; background:#00f");

  // ! warning!
  console.warn("cwa");

  // ! Error :|
  console.error("cer");

  // ! Info
  console.info("Information");

  // ! Testing
  console.assert(1 === 1, "assert work only if is false");
  console.assert(1 !== 1, "assert show only if is false");

  const check = document.querySelector("p");
  console.assert(check.classList.contains("is-active"), "check isn't active!");

  // ! clearing
  // console.clear();

  // ! Viewing DOM Elements
  console.log("p", p);
  console.dir(p);

  // ! Grouping together
  // *open
  dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`dog.name : ${dog.name}`);
    console.log(`dog.age : ${dog.age}`);
    console.groupEnd(`${dog.name}`);
  });
  //*groupCollapsed
  dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`dog.name : ${dog.name}`);
    console.log(`dog.age : ${dog.age}`);
    console.groupEnd(`${dog.name}`);
  });

  // ! counting
  console.count("Dominik");
  console.count("Dominik");
  console.count("Dominik");
  console.count("p");
  console.count("Dominik");
  console.count("Dominik");
  console.count("Dominik");
  console.count("p");

  // ! timing
  console.time("Count fetch time");
  fetch("http://api.github.com/users/DominikPalacz")
    .then(data => data.json())
    .then(data => {
      console.warn(data);
      console.timeEnd("Count fetch time");
    });
});
