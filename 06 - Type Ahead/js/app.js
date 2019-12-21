document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.classList.add("section-6");
  section.innerHTML = `<form class="search-form">
  <input type="text" class="search" placeholder="City or State">
  <ul class="suggestions">
    <li>Filter for a city</li>
    <li>or a state</li>
  </ul>
</form>`;
  fragment.appendChild(section);
 document.querySelector(".scroll-container").appendChild(fragment);

  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  const cities = [];

  // ES8
  const getData = async url => {
    const response = await fetch(url);
    const data = await response.json();
    cities.push(...data);
  };

  getData(endpoint);

  const findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
      // here we need to figure out if the city or state matches what was searched
      const regex = new RegExp(wordToMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
  };

  const numberWithCommas = x =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray
      .map(place => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        const stateName = place.state.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
      })
      .join("");
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");

  searchInput.addEventListener("change", displayMatches);
  searchInput.addEventListener("keyup", displayMatches);
});
