var Twitter = require('twitter'),
    util = require('util'),
    mysql = require('mysql'),
    dt = require('date-utils');

var client = new Twitter({
  consumer_key: '1Jd0jrwwuk8EX3MKpapr9q7X5',
  consumer_secret: 'A5ixcohzwXj1l4qWrgrcZeuWQdUHi8nkSz3qkzrVKKADijrXvB',
  access_token_key: '1481325793-ZGt3ZihYCt6w8QZ6wZyXGMT4jdrEgtNRZWSjI1Y',
  access_token_secret: '0efHLTGScYg6bolFAXulIRjzBV0ui3FmoFKqMi3dcJvdC',
});

// 自分の環境に合わせてカスタマイズしてくだちい
var connection = mysql.createConnection({
  host     : '172.17.7.100',
  user     : 'gengar',
  password : 'gengar',
  database : 'gengar'
});

var woeid = {"nkyu": "1110809", // "北九州"
             "sait": "1116753", // "埼玉"
             "chib": "1117034", // "千葉"
             "fuku": "1117099", // "福岡"
             "hira": "1117155", // "平松"
             "hiro": "1117227", // "広島"
             "kawa": "1117502", // "川崎"
             "koub": "1117545", // "神戸"
             "kuma": "1117605", // "熊本"
             "nago": "1117817", // "名古屋"
             "niig": "1117881", // "新潟"
             "saga": "1118072", // "相模原"
             "sapp": "1118108", // "札幌"
             "send": "1118129", // "仙台"
             "taka": "1118285", // "高松"
             "toky": "1118370", // "東京"
             "yoko": "1118550", // "横浜"
             "okin": "2345896", // "沖縄"
             "ohsa": "15015370", // "大阪"
             "kyot": "15015372", // "京都"
             "japa": "23424856", // "日本"
             "okay": "90036018"  // "岡山"
            };

  console.log(woeid.japa);

function getTrend(callback){
  client.get('trends/place',{ id: woeid.japa}, function(error, tweets, response){
    if(error) console.log(error);
    callback(tweets[0].trends);
  });
}


getTrend(function(trends){

  var dt = new Date();
  var formatted = dt.toFormat("YYYY-MM-DD HH24:MI:SS");
  create_at = formatted;
  update_at = formatted;

  for (var i = 0; i < trends.length; i++) {
    var word = trends[i].name;
    if (word) {
      connection.query("SELECT word FROM `words` WHERE `word` = '" + word + "';", 
                      function (error, results, fields) {
                        if (results.length === 0) {
                            console.log(results);
                          } else {
                            console.log(word);
                        }
      });

      // connection.query("INSERT INTO `words` (`word`, `createdAt`, `updatedAt`) VALUES ('" + word + "','" + create_at + "','" + update_at + "');", 
      //                 function (error, results, fields) {
      //                   console.log(results);
      // });
    }
  }
});
