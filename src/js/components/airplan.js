const plan = document.querySelector(".plan");
const tooltip = document.querySelector(".plan__tooltip");
const tooltipText = tooltip.querySelector(".plan__tooltip-text");
const circles = document.querySelectorAll(".plan__circle");
const svg = document.querySelector(".plan__svg");

svg.addEventListener("mousemove", (e) => {
  const point = svg.createSVGPoint();
  point.x = e.clientX;
  point.y = e.clientY;
  const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
  const x = svgPoint.x;
  const y = svgPoint.y;

  circles.forEach((circle) => {
    circle.addEventListener("mousemove", () => {
      tooltipText.innerText = circle.dataset.tooltip;
      tooltip.style.top = y - 80 + "px";
      tooltip.style.left = x - 60 + "px";
    });

    circle.addEventListener("mouseover", () => {
      tooltip.style.opacity = "1";
    });

    circle.addEventListener("mouseout", () => {
      tooltip.style.opacity = "0";
    });
  });
});
