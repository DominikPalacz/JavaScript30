document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.classList.add("section-17");

  section.innerHTML = `<ul id="bands"></ul>`;
  fragment.appendChild(section);
  document.body.appendChild(fragment);

  const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog"
  ];

  const strip = bandName => bandName.replace(/^(a |the |an )/i, "").trim();

  const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

  document.getElementById("bands").innerHTML = sortedBands
    .map(band => `<li>${band}</li>`)
    .join("");
});
