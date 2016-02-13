const _ = require("lodash");

module.exports = (request, reply) => {
  const formData = request.payload;
  const ideaJSON = JSON.parse(formData.idea_list);
  console.log(_.map(ideaJSON, (element, index, array) => {
    var map = {};
    map[element.word] = element.id;
    return map;
  }));
  reply.view("inspi", {
    nav_title: "4. 忘れると、ひらめく",
    main_theme: formData.main_theme,
    postData: request.payload,
    words: _.map(ideaJSON, (element, index, array) => {
      return element.word;
    }),
    word_to_inspi: JSON.stringify(ideaJSON.reduce((map, obj) => {
      map[obj.word] = obj.id;
      return map;
    }, {}))
  });
};
