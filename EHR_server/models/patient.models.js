const mongoose = require("mongoose");

const patientSchema = mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    gender: String,
    blood_type: String,
    phone_number: String,
    email: String,
    emergency_contact: String,
    health:String
    
  },
  { versionKey: false }
);

const PatientModel = mongoose.model("Patient", patientSchema);

module.exports = { PatientModel };
