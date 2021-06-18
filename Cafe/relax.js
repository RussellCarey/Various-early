const relaxCheck = () => {
  if (window.innerWidth > 800) {
    setTimeout(() => {
      var rellax = new Rellax(".relax");
      document.getElementById("about").style = "top: 20%";
    }, 200);
  }
};

relaxCheck();
