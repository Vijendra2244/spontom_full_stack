import React, { useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useToast, Button } from "@chakra-ui/react";

export const logoutUser = async () => {
  try {
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    const res = await axios.post(
      "https://spontom-full-stack.onrender.com/users/logout",
      {},
      {
        withCredentials: true,
      }
    );

    if (res.data.status === "success") {
      return { success: true, message: "Logout successfully" };
    }
  } catch (error) {
    if (error.response && error.response.data.status === "fail") {
      return {
        success: false,
        message: "Some error occurred while logged out",
      };
    }
    if (error.response && error.response.data.status === "allready") {
      return { success: false, message: "You are already logged out" };
    }
    return { success: false, message: "Error during logout" };
  }
};

function Logout() {
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = async () => {
    const logoutResult = await logoutUser();
    if (logoutResult.success) {
      toast({
        position: "bottom",
        description: "Logout successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/");
    }
  };

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Logout;
