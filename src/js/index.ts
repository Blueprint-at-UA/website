import $ from "jquery";
import "bootstrap";
import "typeface-open-sans";

$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $(".navbar").css("background", "rgb(24, 123, 229)");
    } else {
      $(".navbar").css("background", "transparent");
    }
  });
});
