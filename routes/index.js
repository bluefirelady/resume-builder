/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Paste Job Description!' });
};

exports.resume = function(req, res){
  res.render('resume', { title: 'Jill Thibault' });
};