$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  if (wScroll > 100) {
    $(".navbar").addClass("tampil-nav");
    $("img").addClass("img-child");
  } else {
    $(".navbar").removeClass("tampil-nav");
    $("img").removeClass("img-child");
  }

  if (wScroll > 300) {
    $(".kanan").addClass("muncul");
  } else {
    $(".kanan").removeClass("muncul");
  }

  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h2").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.3 + "%)",
  });

  $(".jumbotron svg").css({
    transform: "translate(0px, " + wScroll / 10 + "%)",
  });

  $("#about img").css({
    transform: "translate(" + wScroll / 80 + "%," + wScroll / 30 + "%)",
  });
});

// $(window).on("load", function () {});
