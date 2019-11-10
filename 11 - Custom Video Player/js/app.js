document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.classList.add("section-11");

  section.innerHTML = `
<div class="player">
  <video class="player__video viewer" src="11 - Custom Video Player/652333414.mp4"></video>

  <div class="player__controls">
    <div class="progress">
      <div class="progress__filled"></div>
    </div>
    <button class="player__button toggle" title="Toggle Play">►</button>
    <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
    <input type="range" name="playbackRate" class="player__slider" min="0.5" max="3" step="0.1" value="1">
    <button data-skip="-10" class="player__button">« 10s</button>
    <button data-skip="25" class="player__button">25s »</button>
    <button class="player__button full">🔲</button>
  </div>
</div>`;
  fragment.appendChild(section);
  document.body.appendChild(fragment);

  /**
   *  Get elements
   *  */
  const player = document.querySelector(".player");
  const video = player.querySelector(".viewer");
  const progress = player.querySelector(".progress");
  const progressBar = player.querySelector(".progress__filled");
  const toggle = player.querySelector(".toggle");
  const ranges = player.querySelectorAll(".player__slider");
  const skipButtons = player.querySelectorAll("[data-skip]");
  const full = player.querySelector(".full");

  /**
   *  Build functions
   *  */
  const startPlay = () => (video.paused ? video.play() : video.pause());

  function updateButton() {
    toggle.textContent = this.paused ? "►" : "❚ ❚";
  }

  function skip() {
    video.currentTime += +this.dataset.skip;
  }

  function handleRangeUpdate() {
    video[this.name] = this.value;
  }

  const handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  };

  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  const handleFullScreen = () => {
    player.requestFullscreen();
  };

  /**
   *  Hook up the event listeners
   *  */
  [video, toggle].forEach(e => e.addEventListener("click", startPlay));

  ["pause", "play"].forEach(e => video.addEventListener(`${e}`, updateButton));
  skipButtons.forEach(button => button.addEventListener("click", skip));
  ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
  ranges.forEach(range =>
    range.addEventListener("mousemove", handleRangeUpdate)
  );
  video.addEventListener("timeupdate", handleProgress);
  full.addEventListener("click", handleFullScreen);

  let mousedown = false;
  progress.addEventListener("click", scrub);
  progress.addEventListener("mousemove", e => mousedown && scrub(e));
  progress.addEventListener("mousedown", () => (mousedown = true));
  progress.addEventListener("mouseup", () => (mousedown = false));
});
