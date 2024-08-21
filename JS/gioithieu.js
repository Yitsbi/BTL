window.addEventListener("load", function () {
  let img = document.getElementById("ads-image");
  let inputs = document.querySelectorAll("input[type=radio]");

  for (let input of inputs) {
    input.onclick = function () {
      for (let input of inputs) {
        if (input !== this) input.checked = false;
      }
      img.src = `../image/tuyensinh_${this.value}.png`;
    };
  }

  //TIMELINE
  let timeline_contents = document.querySelectorAll(".timeline-content");

  for (let content of timeline_contents) {
    content.onclick = function () {
      let text = this.querySelector(".timeline-text");
      text.classList.toggle("show");
    };
  }

  let timeLine = document.querySelectorAll(".timeline > ul > li");
  for (let t of timeLine) {
    t.classList.add("wow");
  }

  let oddTimeline = document.querySelectorAll(
    ".timeline > ul > li:nth-child(odd)"
  );
  for (let t of oddTimeline) {
    t.classList.add("animate__fadeIn");
  }

  let evenTimeline = document.querySelectorAll(
    ".timeline > ul > li:nth-child(even)"
  );
  for (let t of evenTimeline) {
    t.classList.add("animate__fadeIn");
  }

  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
});
