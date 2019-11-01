document.addEventListener("DOMContentLoaded", () => {
  // const fragment = document.createDocumentFragment();
  // const section = document.createElement("section");
  // const h2 = document.createElement("h2");
  // const span = document.createElement("span");
  // const div = document.createElement("div");
  // const label = document.createElement("label");
  // const input = document.createElement("input");
  // const img = document.createElement("img");
  // fragment.appendChild(section);
  // section.appendChild(h2);
  // h2.innerText = "Update CSS Variables with";
  // h2.appendChild(span);
  // console.log("fragment :", section);
  // document.body.appendChild(fragment);
  // !
  // !  I am a lazy programmer... innerHTML
  //!
  /**
   * If something is static,
   * I won't generate it dynamically.
   * Let's focus on functionalities.
   */
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.innerHTML = `<h2>Update CSS Variables with <span class="hl">JS</span></h2>

  <div class="controls">
    <label for="spacing">Spacing:</label>
    <input
      id="spacing"
      type="range"
      name="spacing"
      min="10"
      max="200"
      value="10"
      data-sizing="px"
    />

    <label for="blur">Blur:</label>
    <input
      id="blur"
      type="range"
      name="blur"
      min="0"
      max="25"
      value="10"
      data-sizing="px"
    />

    <label for="base">Base Color</label>
    <input id="base" type="color" name="base" value="#ffc600" />
  </div>

  <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />`;
  fragment.appendChild(section);
  document.body.appendChild(fragment);

  /** Creating logic */
  const inputs = document.querySelectorAll(".controls input");

  function handleUpdate() {
    const suffix = this.dataset.sizing || "";

    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + suffix
    );
  }

  inputs.forEach(input => input.addEventListener("change", handleUpdate));
  inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
});
