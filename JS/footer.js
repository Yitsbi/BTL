window.onload = function () {
  let locations = document.querySelectorAll(".location div");
  let mainscreen = document.getElementById("mainscreen");

  for (let location of locations) {
    location.onclick = function () {
      let value = this.getAttribute("value"); //lay thuoc tinh value trong div (vi ban than div ko co value)
      mainscreen.src = value;
    };
  }
};
