module.exports = function(app, express) {
  var applicantsRouter = express.Router();
  var recruitersRouter = express.Router();

  app.use('/api/applicants', applicantsRouter);
  app.use('/api/recruiters', recruitersRouter);

  require('./applicants/applicantRoutes.js')(applicantsRouter);
  require('./recruiters/recruiterRoutes.js')(recruitersRouter);

}
