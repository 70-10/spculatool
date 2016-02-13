$(function() {
  var wordToInspi = JSON.parse($(".condara-inspi").text());
  console.log(wordToInspi);

  var selectValue = $(".condara-select").val();
  console.log(wordToInspi[selectValue]);

  $(".condara-textarea").text(wordToInspi[selectValue]);


  $(".condara-select").change(function() {
    $(".condara-textarea").val(wordToInspi[$(this).val()]);
  });

  $(".condara-textarea").each(function(){
    $(this).bind("keyup", hoge(this));
  });
  function hoge(elm){
    var v, old = elm.value;
    return function(){
      if(old != (v=elm.value)){
        old = v;
        str = $(this).val();
        // $("#textarea2 div").text(str);
        var word = $(".condara-select").val();
        wordToInspi[word] = str;
      }
    };
  }

});
