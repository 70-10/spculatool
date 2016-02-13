$(function() {
  setTimeout(function () {
    pushableButton();
  }, 10);

  function pushableButton() {
    $(".combi-button").removeClass("is-disabled").addClass("is-success");
  }
});
