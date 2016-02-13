$(function() {
  var wordAllCount = parseInt($(".condara-count").text());

  function pushableButton() {
    $(".combi-button").removeClass("is-disabled").addClass("is-danger");
  }

  $(".condara-idea").each(function(){
    $(this).bind("keyup", hoge(this));
  });
  function hoge(elm){
    var v, old = elm.value;
    return function(){
      if(old != (v=elm.value)){
        var containsIdea = false;
        var ideaCount = 0;
        $(".condara-idea").each(function() {
          if ($(this).val() !== "") {
            containsIdea = true;
            ideaCount++;
          }
        });
        $(".condara-count").text(wordAllCount - ideaCount);
        if (containsIdea) {
          pushableButton();
        } else {
          $(".combi-button").removeClass("is-danger").addClass("is-disabled");
        }
      }
    };
  }
});
