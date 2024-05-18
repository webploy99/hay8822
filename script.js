AOS.init();
    document.addEventListener("DOMContentLoaded", function () {
      var splide = new Splide("#splide1", {
        type: "loop", // slide loop fade
        perPage: 1,
        autoplay: 1,
        interval: 1250,
      });
      splide.mount();

      //new Splide('#splide2').mount();
      new Splide("#splide2", {
        cover: 1,
        heightRatio: 0.5,
      }).mount();

      new Splide("#splide3", {
        //cover:1,
        //heightRatio:1,
        loop: 1,
        perPage: 2,
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
      }).mount();

      new Splide("#splide4", {
        cover: 1,
        heightRatio: 1,
      }).mount();
    });
    const HandleHiddenMenu = () => {
      document.getElementById("toggleStyle").style.visibility = "hidden";
      document.getElementById("toggleStyle").style.transition =
        "all 0.1s ease";
    };
    const HandleShowMenu = () => {
      document.getElementById("toggleStyle").style.visibility = "visible";
      document.getElementById("toggleStyle").style.display = "block";
      document.getElementById("toggleStyle").style.transition =
        "all 0.2s ease";
    };

    window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 220);
    });