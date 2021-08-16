const apiRouter = require('express').Router();

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');

apiRouter.use('/tips', tipsRouter);
apiRouter.use('/feedback', feedbackRouter);

module.exports = apiRouter;
