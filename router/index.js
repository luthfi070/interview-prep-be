const IndexRouter = require("express").Router();
const ClinicRouter = require("./clinicRouter");

IndexRouter.use("/clinic", ClinicRouter);

module.exports = IndexRouter;
