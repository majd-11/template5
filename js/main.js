let one = document.querySelector(".one");
let info = document.querySelector(".info");
let myBtn = document.querySelector(".btn");
window.onload = function () {
  one.focus();
};
one.addEventListener("input", () => {
  if (one.value === "damascus") {
    info.innerHTML = `<div class="status">
    <img src="images/cloud.png" alt="" class="rain" />
    <h1 class="temp">20 C</h1>
    <h2>damascus</h2>
    </div>
    <div class="description">
      <div class="g-col-6 part1">
      <img src="images/snow.png" class="humidity"  />
      <p>20% <br/>humidity</p>
      </div>
      <div class="g-col-6 part2">
      <img src="images/mist.png" class="wind" />
      <p>10km/h <br> wind speed</p>
    </div>
    </div>
    </div>
    </div>`;
  }
});
