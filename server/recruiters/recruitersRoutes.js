module.exports = function(router) {
  router.post('/login', function(req, res) {
    res.send('Signing in as a recruiter');
  });
};
