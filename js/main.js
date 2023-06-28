window.addEventListener("scroll" , (e)=>{
    var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height()
    var scrollPercent = (s / (d - c)) * 100;
    console.log(scrollPercent)
    $(".fuller").css("width" , scrollPercent+"%")
})



function stopWheelZoom(event) {
    if (event.ctrlKey == true) {
      event.preventDefault();
    }
  }
  function stopKeyZoom(event) {
    if (event.ctrlKey && [48,61,96,107,109,187,189].indexOf(event.keyCode) > -1) {
      event.preventDefault();
    }
  }
  document.addEventListener("keydown", stopKeyZoom);
  document.addEventListener('mousewheel', stopWheelZoom);
  document.addEventListener('DOMMouseScroll', stopWheelZoom);
