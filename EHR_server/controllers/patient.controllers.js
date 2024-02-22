const { PatientModel } = require("../models/patient.models");
const { UserModel } = require("../models/user.models");

const getPatient = async (req, res) => {
  try {
    const findPatientDetails = await PatientModel.find();
    res.status(200).send({ status: "success", data: { findPatientDetails } });
  } catch (error) {
    res.status(400).send({ status: "fail", msg: error.message });
  }
};

const createNewPatient = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      gender,
      blood_type,
      phone_number,
      email,
      emergency_contact,
      health,
    } = req.body;
    const addUserInDb = new PatientModel({
      first_name,
      last_name,
      gender,
      blood_type,
      phone_number,
      email,
      emergency_contact,
      health,
    });
    await addUserInDb.save();
    res.status(200).send({ status: "success", data: { addUserInDb } });
  } catch (error) {
    res.status(400).send({ status: "fail", msg: error.message });
  }
};

const updatePatientsDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const patientDetailsUpated = req.body;
    const updateDetails = await PatientModel.findByIdAndUpdate(
      { _id: id },
      patientDetailsUpated
    );
    res
      .status(200)
      .send({ status: "success", msg: "patients updated successfully" });
  } catch (error) {
    res.status(400).send({ status: "fail", msg: error.message });
  }
};
const deletePatientsDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDetails = await PatientModel.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .send({ status: "success", msg: "patients deleted successfully" });
  } catch (error) {
    res.status(400).send({ status: "fail", msg: error.message });
  }
};

module.exports = {
  getPatient,
  createNewPatient,
  updatePatientsDetails,
  deletePatientsDetails,
};
