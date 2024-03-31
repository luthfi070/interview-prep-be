const ClinicRouter = require("express").Router();
const ClinicController = require("../controller/clinicController");

ClinicRouter.get("/slot/:id", ClinicController.getTime);
ClinicRouter.post("/", ClinicController.createClinic);
ClinicRouter.get("/", ClinicController.getAllClinic);

module.exports = ClinicRouter;
