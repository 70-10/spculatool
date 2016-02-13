var Twitter = require('twitter'),
    util = require('util');

var client = new Twitter({
  consumer_key: '1Jd0jrwwuk8EX3MKpapr9q7X5',
  consumer_secret: 'A5ixcohzwXj1l4qWrgrcZeuWQdUHi8nkSz3qkzrVKKADijrXvB',
  access_token_key: '1481325793-ZGt3ZihYCt6w8QZ6wZyXGMT4jdrEgtNRZWSjI1Y',
  access_token_secret: '0efHLTGScYg6bolFAXulIRjzBV0ui3FmoFKqMi3dcJvdC',
});

function trend(){
  client.get('favorites/list', function(error, tweets, response){
    if(error) throw error;
    console.log(tweets);  // The favorites.
    console.log(response);  // Raw response object.
  });
}

trend();