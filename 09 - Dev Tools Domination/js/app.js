document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");

  section.classList.add("section-9");
  section.innerHTML = `<p class="click-me">click me 👁‍🗨 ×BREAK×DOWN×</p>`;

  fragment.appendChild(section);
 document.querySelector(".scroll-container").appendChild(fragment);

  const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

  function makeGreen() {
    const p = document.querySelector(".click-me");
    p.style.color = "red";
    p.style.fontSize = "50px";
  }

  const p = document.querySelector(".click-me");
  p.addEventListener("click", makeGreen);

  // ! Interpolated
  console.log(
    "%c // ! Interpolated //",
    " font-size:15px; background:#ff0; color:#000; line-height:2em"
  );
  console.log("Hi, I %s JavaScript!", "❤"); // old

  // ! Styled
  console.log(
    "%c // ! Styled //",
    " font-size:15px; background:#ff0; color:#000; line-height:2em"
  );
  console.log("%c I Styled with %c", " font-size:75px; background:#00f");

  // ! warning!
  console.log(
    "%c // ! warning! //",
    " font-size:15px; background:#ff0; color:#000; line-height:2em"
  );
  console.warn("cwa");

  // ! Error :|
  console.log(
    "%c // ! Error :| //",
    " font-size:15px; background:#ff0; color:#000; line-height:2em"
  );
  console.error("cer");

  // ! Info
  console.log(
    "%c // ! Info //",
    " font-size:15px; background:#ff0; color:#000; line-height:2em"
  );
  console.info("Information");

  // ! Testing
  console.log(
    "%c // ! Testing //",
    " font-size:15px; background:#ff0; color:#000; line-height:2em"
  );
  console.assert(1 === 1, "assert work only if is false");
  console.assert(1 !== 1, "assert show only if is false");

  const check = document.querySelector(".click-me");
  console.assert(check.classList.contains("is-active"), "check isn't active!");

  // ! clearing
  console.log(
    "%c // ! clearing //",
    " font-size:15px; background:#ff0; color:#000; line-height:2em"
  );
  // console.clear();

  // ! Viewing DOM Elements
  console.log(
    "%c // ! Viewing DOM Elements //",
    " font-size:15px; background:#ff0; color:#000; line-height:2em"
  );
  console.log("p", p);
  console.dir(p);

  // ! Grouping together
  console.log(
    "%c // ! Grouping together //",
    " font-size:15px; background:#ff0; color:#000; line-height:2em"
  );
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
  console.log(
    "%c // ! counting //",
    " font-size:15px; background:#ff0; color:#000; line-height:2em"
  );
  console.count("Dominik");
  console.count("Dominik");
  console.count("Dominik");
  console.count("p");
  console.count("Dominik");
  console.count("Dominik");
  console.count("Dominik");
  console.count("p");

  // ! timing
  console.log(
    "%c // ! timing //",
    " font-size:15px; background:#ff0; color:#000; line-height:2em"
  );
  console.time("Count fetch time");
  fetch("http://api.github.com/users/DominikPalacz")
    .then(data => data.json())
    .then(data => {
      console.warn(data);
      console.timeEnd("Count fetch time");
    });
});
