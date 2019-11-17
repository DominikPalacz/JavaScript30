document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.classList.add("section-");

  section.innerHTML = `
  <ul class="videos">
    <li data-time="15:43">
      Video 1 - 15:43
    </li>
    <li data-time="2:33">
      Video 2 - 2:33
    </li>
    <li data-time="3:45">
      Video 3 - 3:45
    </li>
    <li data-time="20:47">
      Video 4 - 20:47
    </li>
    <li data-time="5:21">
      Video 5 - 5:21
    </li>
    <li data-time="6:52">
      Video 6 - 6:52
    </li>
    <li data-time="3:46">
      Video 7 - 3:46
    </li>
    <li data-time="5:45">
      Video 8 - 5:45
    </li>
    <li data-time="1:14">
      Video 9 - 1:14
    </li>
    <li data-time="3:31">
      Video 10 - 3:31
    </li>
  </ul>
  `;
  fragment.appendChild(section);
  document.body.appendChild(fragment);

  const timeNodes = [...document.querySelectorAll("[data-time]")];
  const secondInHour = 3600;
  const minutesInHour = 60;

  const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(":").map(parseFloat);
      return mins * minutesInHour + secs;
    })
    .reduce((total, sec) => total + sec);

  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / secondInHour);
  secondsLeft = secondsLeft % secondInHour;

  const mins = Math.floor(secondsLeft / minutesInHour);
  secondsLeft = secondsLeft % minutesInHour;

  const totalSumTime = document.createElement("strong");
  totalSumTime.innerText = `Total time: ${hours}h ${mins}m ${secondsLeft}s`;
  const list = document.querySelector(".videos");
  list.appendChild(totalSumTime);
});
