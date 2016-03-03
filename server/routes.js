module.exports = function(app) {
  app.get('/test', function(req, res) {
    res.send('hi');
  });
  app.get('*', function(req, res) {
    res.redirect('/');
  });
};
