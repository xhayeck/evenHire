module.exports = function(app, express) {
  var applicantRouter = express.Router();
  var recruitersRouter = express.Router();

  app.use('/api/applicants', applicantRouter);
  app.use('/api/recruiters', recruitersRouter);

  require('./applicants/applicantsRoutes.js')(applicantRouter);
  require('./recruiters/recruitersRoutes.js')(recruitersRouter);
}
