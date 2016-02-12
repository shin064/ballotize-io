var router = require('express').Router();

app.get('/countVotes' , function (req, res) {
  console.log('req in count Votes: ', req);
  var data = req.body;
  // expecting data in this format
  // var data = {
  //   A: [1, 3, 2],
  //   B: [2, 2, 1],
  //   C: [3, 1, 3]
  // };

  var sum = function (array) {
    var currSum = 0;
    for (var i = 0; i < array.length; i++) {
      currSum += array[i];
    }
    return currSum;
  };

  var countVotes = function (data) {
      var results = {};
    for (var k in data) {
      results[k] = sum(data[k]);
    }
    return results;
  }

  var counted = countVotes(data);
  
  res.json(counted);
})


module.exports = router;