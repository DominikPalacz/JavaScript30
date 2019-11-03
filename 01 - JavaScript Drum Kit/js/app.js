document.addEventListener("DOMContentLoaded", () => {
  const section = document.createElement("section");
  section.classList.add("section-1");
  /** Data */
  const keyArray = [
    { key: 65, label: "A", text: "clap" },
    { key: 83, label: "S", text: "hihat" },
    { key: 68, label: "D", text: "kick" },
    { key: 70, label: "F", text: "openhat" },
    { key: 71, label: "G", text: "boom" },
    { key: 72, label: "H", text: "ride" },
    { key: 74, label: "J", text: "snare" },
    { key: 75, label: "K", text: "tom" },
    { key: 76, label: "L", text: "tink" }
  ];

  /** Creating a keys */
  const createKeys = array => {
    const keys = document.createElement("div");
    keys.classList.add("keys");

    array.forEach(e => {
      let key = document.createElement("div");
      let label = document.createElement("kbd");
      let span = document.createElement("span");

      key.dataset.key = e.key;
      key.classList.add("key");
      label.innerText = e.label;
      span.innerText = e.text;
      span.classList.add("sound");

      key.appendChild(label);
      key.appendChild(span);
      keys.appendChild(key);
    });
    return keys;
  };

  section.appendChild(createKeys(keyArray));
  document.body.appendChild(section);

  /** Creating a audio */
  const createAudio = array => {
    array.forEach(e => {
      const audio = document.createElement("audio");
      audio.dataset.key = e.key;
      //! audio.src = `sounds/${e.text}.wav`;
      audio.src = `./01 - JavaScript Drum Kit/sounds/${e.text}.wav`;

      section.appendChild(audio);
    });
  };

  createAudio(keyArray);

  const playSound = e => {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!sound) return;

    key.classList.add("playing");
    sound.currentTime = 0;
    sound.play();
  };

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  window.addEventListener("keydown", playSound);
});
