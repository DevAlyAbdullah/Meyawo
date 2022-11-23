$(function () {
  $(".menu-toggle i:first-child").click(function () {
    $(".menu-toggle i").toggle("fast");
    var delay = 350;
    $(".menu-list ul li").each(function () {
      $(this).delay(delay).animate({ top: "0", opacity: "1" });
      delay = delay - 50;
    });
  });
  $(".menu-toggle i:last-child").click(function () {
    $(".menu-toggle i").toggle("fast");
    var delay = 350;
    $(".menu-list ul li").each(function () {
      $(this).delay(delay).animate({ top: "-70px", opacity: "0" });
      delay = delay - 50;
    });
  });
  if ($(window).scrollTop() > 19) {
    $(".navbar-container").removeClass("navbar-container-reset");
    $(".navbar-container").addClass("navbar-container-scrolled");
    $(".navbar-container .navbar .logo").addClass("logo-scrolled");
    $(".menu-list ul li:not(:last-child)").addClass("li-scrolled");
    $(".navbar .menu-toggle i").addClass("i-scrolled");
  } else {
    $(".navbar-container").addClass("navbar-container-reset");
    $(".navbar-container").removeClass("navbar-container-scrolled");
    $(".navbar-container .navbar .logo").removeClass("logo-scrolled");
    $(".menu-list ul li:not(:last-child)").removeClass("li-scrolled");
    $(".navbar .menu-toggle i").removeClass("i-scrolled");
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 19) {
      console.log("test");
      $(".navbar-container").removeClass("navbar-container-reset");
      $(".navbar-container").addClass("navbar-container-scrolled");
      $(".navbar-container .navbar .logo").addClass("logo-scrolled");
      $(".menu-list ul li:not(:last-child)").addClass("li-scrolled");
      $(".navbar .menu-toggle i").addClass("i-scrolled");
    } else {
      $(".navbar-container").addClass("navbar-container-reset");
      $(".navbar-container").removeClass("navbar-container-scrolled");
      $(".navbar-container .navbar .logo").removeClass("logo-scrolled");
      $(".menu-list ul li:not(:last-child)").removeClass("li-scrolled");
      $(".navbar .menu-toggle i").removeClass("i-scrolled");
    }
  });
});
