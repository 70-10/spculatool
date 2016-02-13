$(function() {

  var interval = setInterval(function () {
    var current = parseInt($(".condara-time").text());
    if (current > 0) {
      var time = current - 1;
      console.log(time);
      $(".condara-time").text(time);
      $(".condara-time-str").text(toHms(time));
      if (time == 0) {;
        $("form").submit();
      }
    } else {
      clearInterval(interval);
    }
  }, 1000);


  function toHms(t) {
    var hms = "";
    var h = t / 3600 | 0;
    var m = t % 3600 / 60 | 0;
    var s = t % 60;

    if (h != 0) {
      hms = h + "時間" + padZero(m) + "分" + padZero(s) + "秒";
    } else if (m != 0) {
      hms = m + "分" + padZero(s) + "秒";
    } else {
      hms = s + "秒";
    }

    return hms;

    function padZero(v) {
      if (v < 10) {
        return "0" + v;
      } else {
        return v;
      }
    }
  }

});
