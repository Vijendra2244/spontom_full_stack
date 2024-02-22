import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useToast, Card,Button, Text } from "@chakra-ui/react";

function Register() {
  const navigate = useNavigate();
  const toast = useToast();

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://spontom-full-stack.onrender.com/users/register",
        userDetails,
        {
          withCredentials: true,
        }
      );

      console.log(res);
      if (res.data.status == "success") {
        toast({
          position: "bottom",
          description: "Registration successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/login");
      }

      setUserDetails({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      if (error.response && error.response.data.status === "fail") {
        toast({
          position: "bottom",
          description: "All field are required!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <Text textAlign="center">Register / SignUp</Text>
      <Card w={{
        base:"60%",
        sm:"50%",
        md:"40%",
        lg:"40%"
      }} m=" 1rem auto" p="10px">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter your name</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            value={userDetails.username}
            required
            placeholder="Enter your user name"
          />

          <br />
          <label htmlFor="email">Enter your email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={userDetails.email}
            required
            placeholder="Enter your email"
          />
          <br />
          <label htmlFor="password">Enter your password</label>
          <br />
          <div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={userDetails.password}
              required
              placeholder="Enter your password"
            />
          </div>

          <br />

          <Button type="submit">Register</Button>
        </form>
      </Card>
    </>
  );
}

export default Register;
