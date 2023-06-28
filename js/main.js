window.addEventListener("scroll" , (e)=>{
    var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height()
    var scrollPercent = (s / (d - c)) * 100;
    console.log(scrollPercent)
    $(".fuller").css("width" , scrollPercent+"%")
})


