console.log('Hello')
console.log('Mello')




// These code snippets use an open-source library. http://unirest.io/nodejs
unirest.get("https://wordsapiv1.p.mashape.com/words/soliloquy")
.header("X-Mashape-Key", "<required>")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});