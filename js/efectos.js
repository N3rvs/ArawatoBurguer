$(document).ready(function () {
  // Scroll Elementos Menu
  var acercaDe = $("#acerca-de").offset().top,
    menu = $("#platillos").offset().top,
    galeria = $("#galeria").offset().top,
    ubicacion = $("#ubicacion").offset().top;

  // Boton Acerca de
  $("#btn-acerca-de").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 500,
      },
      500
    );
  });

  $("#btn-menu").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: menu - 40,
    });
  });

  $("#btn-galeria").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: galeria - 40,
    });
  });

  $("#btn-ubicacion").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: ubicacion - 50,
    });
  });

  // Efecto Menu
  $(".menu a").each(function (index, elemento) {
    $(this).css({
      top: "-200px",
    });

    $(this).animate(
      {
        top: "0",
      },
      2000 + index * 500
    );
  });
});
