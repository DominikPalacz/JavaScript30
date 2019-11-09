document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");

  section.classList.add("section-8");
  section.innerHTML = `<canvas id="draw" width="320" height="320"></canvas>`;

  fragment.appendChild(section);
  document.body.appendChild(fragment);

  const canvas = document.getElementById("draw");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth - 30;
  canvas.height = window.innerHeight - 30;

  context.strokeStyle = "#0123456";
  context.lineJoin = "round";
  context.lineCap = "round";
  context.lineWidth = 1;

  let isDrawing = false,
    lastX = 0,
    lastY = 0,
    hue = 0,
    direction = true;

  const draw = ({ offsetX, offsetY }) => {
    if (isDrawing) {
      context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(offsetX, offsetY);
      context.stroke();

      [lastX, lastY] = [offsetX, offsetY];

      hue = hue >= 360 ? 0 : hue + 1;

      direction =
        context.lineWidth >= 100 || context.lineWidth <= 1
          ? (direction = !direction)
          : direction;

      direction ? context.lineWidth++ : context.lineWidth--;
    }
  };

  const setCurrentPosition = ({ offsetX, offsetY }) => {
    isDrawing = true;
    [lastX, lastY] = [offsetX, offsetY];
  };

  document.addEventListener("mousedown", e => setCurrentPosition(e));
  document.addEventListener("mousemove", draw);
  document.addEventListener("mouseup", () => (isDrawing = false));
  document.addEventListener("mouseout", () => (isDrawing = false));
});
