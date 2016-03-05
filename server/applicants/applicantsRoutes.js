module.exports = function(router) {
  router.post('/login', function(req, res) {
    res.send('Im signing in as an applicant');
  });
};
