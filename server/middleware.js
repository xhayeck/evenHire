module.exports = function(app, express) {
  var applicantsRouter = express.Router();
  var recruitersRouter = express.Router();
  var authRouter = express.Router();

  app.use('/api/applicants', applicantsRouter);
  app.use('/api/recruiters', recruitersRouter);
  app.use('/api/auth', authRouter);

  require('./auth/authController.js')(authRouter);
  require('./applicants/applicantRoutes.js')(applicantsRouter);
  require('./recruiters/recruiterRoutes.js')(recruitersRouter);

}
