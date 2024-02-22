import { Link } from "react-router-dom";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        p="5px"
        border="1px solid black"
        mt="5px"
      >
        <Link to="/">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/add" >Add New patients</Link>
        <Link to="/logout" >Logout</Link>
      </Box>
      <AllRoutes />
    </>
  );
}

export default App;
