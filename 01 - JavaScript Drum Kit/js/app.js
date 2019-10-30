document.addEventListener("DOMContentLoaded", () => {
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

  document.body.appendChild(createKeys(keyArray));

  /** Creating a audio */
  const createAudio = array => {
    console.warn(array);
    array.forEach(e => {
      const audio = document.createElement("audio");
      audio.dataset.key = e.key;
      audio.src = `sounds/${e.text}.wav`;
      console.log(audio);
      document.body.appendChild(audio);
    });
  };

  createAudio(keyArray);
});
