import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Button,
  useToast,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Modal,
  Card,
  Flex,
} from "@chakra-ui/react";

function Dashboard() {
  const [data, setData] = useState([]);
  const [editPatientId, setEditPatientId] = useState(null);
  const [updatedHealth, setUpdatedHealth] = useState("");
  const toast = useToast();
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/patients/", {
        withCredentials: true,
      });
      setData(res.data.data.findPatientDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/patients/delete/${id}`,
        { withCredentials: true }
      );
      setData((prevData) => prevData.filter((patient) => patient._id !== id));
      if (res.data.status == "success") {
        toast({
          position: "bottom",
          description: "Patients details deleted successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    setEditPatientId(id);
  };

  const handleCloseEdit = () => {
    setEditPatientId(null);
    setUpdatedHealth("");
  };

  const handleSaveEdit = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:8080/patients/update/${editPatientId}`,
        { health: updatedHealth },
        { withCredentials: true }
      );
      if (res.data.status === "success") {
        toast({
          position: "bottom",
          description: "Patient health successfully updated",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        fetchData();
        handleCloseEdit();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Text fontSize="1.4rem" mb="0.5rem" textAlign="center">
        Patients Details
      </Text>
      <Box
        w="80%"
        m="auto"
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="1rem"
      >
        {data.map((patient, index) => (
          <Card border="1px solid black" p="5px" key={index}>
            <p>patient_first_name = {patient.first_name}</p>
            <p>Patient_last_name = {patient.last_name}</p>
            <p>Blood_Group = {patient.blood_type}</p>
            <p>Patient_health = {patient.health}</p>
            <Flex>
              <Button mr="5px" onClick={() => handleEdit(patient._id)}>
                Edit
              </Button>
              <Button onClick={() => handleUserDelete(patient._id)}>
                Delete
              </Button>
            </Flex>
          </Card>
        ))}
      </Box>
      <Modal isOpen={!!editPatientId} onClose={handleCloseEdit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Patient Health</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Updated Health"
              value={updatedHealth}
              onChange={(e) => setUpdatedHealth(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSaveEdit}>
              Save
            </Button>
            <Button onClick={handleCloseEdit}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Dashboard;
