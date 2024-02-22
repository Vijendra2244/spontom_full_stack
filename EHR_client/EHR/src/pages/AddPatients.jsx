import React, { useState } from "react";
import axios from "axios";
import { Card, Button, Heading, useToast } from "@chakra-ui/react";

function AddPatients() {
  const [patientsDetails, setPatientsDetails] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    blood_type: "",
    phone_number: "",
    email: "",
    emergency_contact: "",
    health: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPatientsDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/patients/add`,
        patientsDetails,
        {
          withCredentials: true,
        }
      );
      if (res.data.status == "success") {
        toast({
          position: "bottom",
          description: "Patients added successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
      setPatientsDetails({
        first_name: "",
        last_name: "",
        gender: "",
        blood_type: "",
        phone_number: "",
        email: "",
        emergency_contact: "",
        health: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Heading textAlign="center">Add Patients Details</Heading>
      <Card w={{
        base:"70%",
        sm:"60%",
        md:"50%",
        lg:"30%"
      }} m=" 1rem auto" p="10px">
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">Enter first name</label>
          <br />
          <input
            type="text"
            name="first_name"
            id="first_name"
            onChange={handleChange}
            value={patientsDetails.first_name}
            required
            placeholder="Enter your patient's first name"
          />
          <br />
          <label htmlFor="last_name">Enter last name</label>
          <br />
          <input
            type="text"
            name="last_name"
            id="last_name"
            onChange={handleChange}
            value={patientsDetails.last_name}
            required
            placeholder="Enter your patient's last name"
          />
          <br />
          <label htmlFor="gender">Enter patient's gender</label>
          <br />
          <input
            type="text"
            name="gender"
            id="gender"
            onChange={handleChange}
            value={patientsDetails.gender}
            required
            placeholder="Enter your patient's gender"
          />
          <br />
          <label htmlFor="blood_type">Enter patient's blood group</label>
          <br />
          <input
            type="text"
            name="blood_type"
            id="blood_type"
            onChange={handleChange}
            value={patientsDetails.blood_type}
            required
            placeholder="Enter patient's blood group"
          />
          <br />
          <label htmlFor="phone_number">Enter patient's phone number</label>
          <br />
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            onChange={handleChange}
            value={patientsDetails.phone_number}
            required
            placeholder="Enter patient's phone number"
          />
          <br />
          <label htmlFor="email">Enter patient's email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={patientsDetails.email}
            required
            placeholder="Enter patient's email"
          />
          <br />
          <label htmlFor="emergency_contact">
            Enter patient's emergency contact
          </label>
          <br />
          <input
            type="text"
            name="emergency_contact"
            id="emergency_contact"
            onChange={handleChange}
            value={patientsDetails.emergency_contact}
            required
            placeholder="Enter patient's emergency contact"
          />
          <br />
          <label htmlFor="health">
            Enter patient's current health condition
          </label>
          <br />
          <input
            type="text"
            name="health"
            id="health"
            onChange={handleChange}
            value={patientsDetails.health}
            required
            placeholder="Enter patient's current health condition"
          />
          <br />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
}

export default AddPatients;
