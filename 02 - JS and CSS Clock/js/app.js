document.addEventListener("DOMContentLoaded", () => {
  const section = document.createElement("section");
  section.classList.add("section-2");
  /** Creating clock */
  const createClock = () => {
    const clockFragment = document.createDocumentFragment();
    const clockSection = document.createElement("div");
    const clock = document.createElement("div");
    const clockFace = clock.cloneNode(true);
    const hands = ["hour", "min", "second"];

    hands.map(e => {
      const hand = clock.cloneNode();

      hand.classList.add("hand", `${e}-hand`);

      clockFace.appendChild(hand);
    });

    clockSection.classList.add("clock-section");
    clock.classList.add("clock");
    clockFace.classList.add("clock-face");

    clockSection.appendChild(clock);
    clock.appendChild(clockFace);
    clockFragment.appendChild(clockSection);

    section.appendChild(clockFragment);
    document.querySelector(".scroll-container").appendChild(section);
  };

  /** Initialize app */
  createClock();

  /** Creating logic */
  const secondHand = document.querySelector(".second-hand");
  const minsHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const setStyleTransform = (e, style) => {
    e.style.transform = `rotate(${style}deg)`;
  };

  const setDate = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;

    const arr = [
      { time: secondsDegrees, element: secondHand },
      { time: minsDegrees, element: minsHand },
      { time: hourDegrees, element: hourHand }
    ];

    arr.map(({ time, element }) => {
      setStyleTransform(element, time);
    });
  };

  /** Initialize app logic */
  setInterval(setDate, 1000);
  setDate();
});
