$(function () {
  $("#slider-price").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [150, 500],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount").val("$" + $("#slider-price").slider("values", 0) +
    " - $" + $("#slider-price").slider("values", 1));
});