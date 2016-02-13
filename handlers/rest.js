const moment = require("moment");

module.exports = (request, reply) => {
  const ideaList = createIdeaList(request.payload);
  console.log(ideaList);
  const oneHour = 180;

  reply.view("rest", {
    nav_title: "3. 一旦やったことは忘れる",
    main_theme: request.payload.main_theme,
    rest_time_str: toHms(oneHour),
    rest_time: oneHour,
    idea_list: JSON.stringify(ideaList)
  });
};

function createIdeaList(formData) {
  const wordIds = JSON.parse(formData.word_ids);

  var list = [];
  for (id of wordIds) {
    var idea = {
      id: formData[id],
      word: formData[`${id}_word`]
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
