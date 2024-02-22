const express = require("express");
const {
  getPatient,
  createNewPatient,
  updatePatientsDetails,
  deletePatientsDetails,
} = require("../controllers/patient.controllers");

const patientRouter = express.Router();

patientRouter.route("/").get(getPatient);
patientRouter.route("/add").post(createNewPatient);
patientRouter.route("/update/:id").patch(updatePatientsDetails);
patientRouter.route("/delete/:id").delete(deletePatientsDetails);

module.exports = { patientRouter };
