window.addEventListener("load", function () {
  /*nav*/
  let img = document.getElementById("ads-image");
  let inputs = document.querySelectorAll("input[type=radio]");
  function notCheck(im) {
    for (let input of inputs) {
      if (input !== im) input.checked = false;
    }
  }
  function animeted() {
    // img.classList.add("onclick-slide");
    // setTimeout(function() {
    //     img.classList.remove("onclick-slide");
    // }, 500);
    img.classList.toggle("onclick-slide");
  }

  //timeChange
  let count1 = 0;
  function changeImg() {
    count1 = (count1 + 1) % 3;
    img.src = `image/tuyensinh_${count1}.png`;
    animeted();
    inputs[count1].checked = true;
    notCheck(inputs[count1]);
  }
  setInterval(changeImg, 5000);

  //click
  for (let input of inputs) {
    input.onclick = function () {
      count1 = this.value;
      notCheck(this);
      img.src = `image/tuyensinh_${this.value}.png`;
      //
      animeted();
    };
  }

  /*registration*/

  let reg = document.getElementById("Sign up");
  let info = document.querySelectorAll(".registration-form input, select");
  let flag = true;
  reg.onclick = function () {
    for (let x of info) {
      if (x.value == "") {
        x.placeholder = "Vui lòng nhập thông tin!";
        x.style.border = "2px solid red";
        flag = false;
      } else {
        x.style.border = null;
      }
    }
    if (flag) {
      alert(
        `Chào ${info[0].value} chúng tôi đã tiếp nhận thông tin và sẽ sớm phản hồi lại bạn. Chân thành cảm ơn!`
      );
    }
  };

  //Footer
  let locations = document.querySelectorAll(".location");
  let mainscreen = document.getElementById("mainscreen");

  for (let location of locations) {
    location.onclick = function () {
      let value = this.firstElementChild.getAttribute("value"); //lay thuoc tinh value trong con dau tien cua div (vi ban than div ko co value)
      mainscreen.src = value;
    };
  }
});
