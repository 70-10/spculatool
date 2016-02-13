const moment = require("moment");

module.exports = (request, reply) => {
  console.log(request.payload);
  const ideaList = createIdeaList(request.payload);
  console.log(ideaList);
  const oneHour = 3;
  reply.view("rest", {
    main_theme: request.payload.main_theme,
    rest_time_str: toHms(oneHour),
    rest_time: oneHour,
    idea_list: JSON.stringify(ideaList)
  });
};

function createIdeaList(formData) {
  const count = parseInt(formData.word_count);

  var list = [];
  for (var i = 1; i <= count; i++) {
    var idea = {
      id: formData[i],
      word: formData[`${i}_word`]
    };
    list.push(idea);
  }
  return list;
}

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
