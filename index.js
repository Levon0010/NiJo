var audio = new Audio("faded.mp3");
var vineboom = new Audio("vineboom.mp3");

audio.play();
setTimeout(function() {
    audio.play();
  }, 211000);

  document.body.addEventListener("click", function () {
    vineboom.play();
    audio.play();
  });                                                